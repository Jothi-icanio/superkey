import { MoreVert, SwapVert } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import AppMenu from "components/AppComponents/AppMenu";
import AppPagination from "components/AppComponents/AppPagination";
import AppTable from "components/AppComponents/AppTable";
import AppTableSearch from "components/AppComponents/AppTableSearch";
import { getStatus } from "components/AppComponents/CustomField";
import Loader from "components/Loader";
import { communityStyles } from "components/StyledComponents";
import { useState } from "react";

const options = [
  { value: "active", label: "Status:Active" },
  { value: "inActive", label: "Status:Inactive" },
  { value: "highToLow", label: "Insured Value:High to Low" },
  { value: "lowToHigh", label: "Insured value:Low to High" },
];

const rows = [
  {
    id: 1,
    name: "Desert Springs",
    propertyManager: "Sarah Johnson",
    claims: 3,
    insured: "$200,000",
    status: 1,
  },
  {
    id: 2,
    name: "Rose Dale",
    propertyManager: "Micheal lee",
    claims: 2,
    insured: "$200,000",
    status: 0,
  },
  {
    id: 3,
    name: "Prestige",
    propertyManager: "Emily Davis",
    claims: 1,
    insured: "$200,000",
    status: 1,
  },
  {
    id: 4,
    name: "Oak Ridge Estates",
    propertyManager: "David Kim",
    claims: 2,
    insured: "$200,000",
    status: 0,
  },
  {
    id: 5,
    name: "Mountain Vista",
    propertyManager: "",
    claims: 3,
    insured: "$200,000",
    status: 1,
  },
  {
    id: 6,
    name: "Willow Creek",
    propertyManager: "Christopher Allen",
    claims: 1,
    insured: "$200,000",
    status: 1,
  },
  {
    id: 7,
    name: "Uptown Plazza",
    propertyManager: "Ashley Tailor",
    claims: 1,
    insured: "$200,000",
    status: 0,
  },
  {
    id: 8,
    name: "Farmland Estates",
    propertyManager: "Ethen Carter",
    claims: 2,
    insured: "$200,000",
    status: 0,
  },
  {
    id: 9,
    name: "Rv Park",
    propertyManager: "Olivia Harris",
    claims: 2,
    insured: "$200,000",
    status: 1,
  },
  {
    id: 10,
    name: "Tech Campus Housing",
    propertyManager: "Samuel Wilson",
    claims: 2,
    insured: "$200,000",
    status: 1,
  },
];

export default function UserTable({
  isLoading,
  height = 400,
  onSelectionChange,
  openPopup,
  handleOffBoard,
}) {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 10;
  const [selectedValue, setSelectedValue] = useState("");

  const columns = [
    {
      field: "id",
      headerName: "S.No",
      headerClassName: "bold-header",
    },
    {
      field: "name",
      headerName: "Community Name",
      flex: 1,
    },
    {
      field: "propertyManager",
      headerName: "Community/Property Manager",
    },
    {
      field: "claims",
      headerName: "Claims",
      flex: 1,
    },
    {
      field: "insured",
      headerName: "Insured",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (row) => (
        <div
          style={{
            display: "flex",
            paddingLeft: "10px",
            height: "100%",
          }}
        >
          <MoreVert
            onClick={(e) => {
              e.stopPropagation();
              setMenuAnchorEl(e.currentTarget);
            }}
            sx={{
              cursor: "pointer",
              color: "#858585",
            }}
          />
        </div>
      ),
    },
  ];

  const handleChangePage = (event, newPage) => setPage(newPage);

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const paginatedRows = filteredRows.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleSort = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuAnchorClose = () => {
    setMenuAnchorEl(null);
  };

  const handleChangeRadio = (e) => {
    setSelectedValue(e.target.value);
  };

  const renderSortComponent = () => {
    return (
      <FormControl sx={{ p: 1, ml: 2 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          value={selectedValue}
          onChange={handleChangeRadio}
        >
          {options.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={label}
              sx={{
                borderRadius: "10px",
                pl: 1,
                pr: 1,
                backgroundColor:
                  selectedValue === value
                    ? theme.palette.blue[100]
                    : "transparent",
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };
  const handleDrawer = () => {
    handleMenuAnchorClose();
    openPopup();
  };
  const renderMenuComponent = () => {
    return (
      <>
        <MenuItem onClick={handleDrawer}>View details</MenuItem>
        <MenuItem onClick={handleOffBoard}>Off-board Community</MenuItem>
      </>
    );
  };

  return (
    <Box sx={communityStyles.container(height)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AppTableSearch
            placeholder="Search Documents"
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            icons={[
              {
                component: <SwapVert />,
                onClick: (e) => handleSort(e),
              },
            ]}
          />

          {paginatedRows.length === 0 ? (
            <Box sx={communityStyles.noData}>No Communities Found</Box>
          ) : (
            <>
              <AppTable
                columns={columns}
                rows={paginatedRows}
                getStatus={getStatus}
                customStyles={{ claims: communityStyles.claims }}
                onSelectionChange={onSelectionChange}
              />
              <AppPagination
                currentPage={page}
                totalItems={filteredRows.length}
                pageSize={pageSize}
                onPageChange={handleChangePage}
              />
            </>
          )}
        </>
      )}
      <AppMenu
        anchorEl={menuAnchorEl}
        handleClose={handleMenuAnchorClose}
        renderComponent={renderMenuComponent()}
      />
      <AppMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        renderComponent={renderSortComponent()}
      />
    </Box>
  );
}
