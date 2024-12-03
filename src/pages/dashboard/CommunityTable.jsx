import { MoreVert, SwapVert } from "@mui/icons-material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import AppMenu from "components/AppComponents/AppMenu";
import AppTable from "components/AppComponents/AppTable";
import AppTableSearch from "components/AppComponents/AppTableSearch";
import { getStatus } from "components/AppComponents/CustomField";
import { StyledMenuItem } from "components/AppComponents/StyledComponent";
import { communityStyles } from "components/StyledComponents";
import { useState } from "react";

const options = [
  { value: "active", label: "Status:Active" },
  { value: "inActive", label: "Status:Inactive" },
  { value: "highToLow", label: "Insured Value:High to Low" },
  { value: "lowToHigh", label: "Insured value:Low to High" },
];

export default function UserTable({
  isLoading,
  height = 400,
  onSelectionChange,
  communityList,
  openPopup,
  handleOffBoard,
  communityInfo,
  setCommunityInfo,
  filters,
  handleChangeRadio,
}) {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 10;

  const columns = [
    {
      field: "index",
      headerName: "S.No",
      headerClassName: "bold-header",
    },
    {
      field: "name",
      headerName: "Community Name",
      flex: 1,
    },
    {
      field: `communityManager`,
      headerName: "Community Manager",
    },
    {
      field: "propertyManager",
      headerName: "Property Manager",
    },
    {
      field: "claims",
      headerName: "Claims",
      renderCell: (row) => {
        return <Typography color="success">{row?.claims}</Typography>;
      },
    },
    {
      field: "insured",
      headerName: "Insured",
      renderCell: (row) => {
        return <Typography>{row?.insured ?? "-"}</Typography>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      align: "center",
      renderCell: (row) => {
        return (
          <Typography
            color={row?.status === "ACTIVE" ? "success" : "error"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={0.5}
          >
            <FiberManualRecordIcon fontSize="12px" />
            {row?.status === "ACTIVE" ? "Active" : "Inactive"}
          </Typography>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      align: "center",
      renderCell: (row) => (
        <IconButton>
          <MoreVert
            onClick={(e) => {
              e.stopPropagation();
              setMenuAnchorEl(e.currentTarget);
              setCommunityInfo(row);
            }}
            color="secondary"
          />
        </IconButton>
      ),
    },
  ];

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleSort = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuAnchorClose = () => {
    setMenuAnchorEl(null);
  };

  const renderSortComponent = () => {
    return (
      <FormControl sx={{ m: 1 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          value={filters.sort}
          onChange={handleChangeRadio}
        >
          {options?.map(({ value, label }) => (
            // <StyledMenuItem sx={{ padding: "0", margin: "0" }}>
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={label}
              sx={{
                borderRadius: "10px",
                pl: 1,
                pr: 1,
                m: 1,
                width: "90%",
                backgroundColor:
                  filters?.sort === value
                    ? theme.palette.blue[100]
                    : "transparent",
              }}
            />
            // </StyledMenuItem>
          ))}
        </RadioGroup>
      </FormControl>
    );
  };
  const handleDrawer = () => {
    handleMenuAnchorClose();
    openPopup(communityInfo);
  };
  const renderMenuComponent = () => {
    return (
      <>
        <StyledMenuItem onClick={handleDrawer}>View details</StyledMenuItem>
        <StyledMenuItem onClick={handleOffBoard}>
          Off-board Community
        </StyledMenuItem>
      </>
    );
  };

  return (
    <Box sx={communityStyles.container(height)}>
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

        <AppTable
          rowKey="communityId"
          isLoading={isLoading}
          columns={columns}
          rows={communityList || []}
          getStatus={getStatus}
          onSelectionChange={onSelectionChange}
          currentPage={page}
          totalItems={communityList?.length}
          pageSize={pageSize}
          onPageChange={handleChangePage}
        />
      </>

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
