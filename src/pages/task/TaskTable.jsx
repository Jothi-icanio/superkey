import { MoreVert, SwapVert } from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { Button, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import AppMenu from "components/AppComponents/AppMenu";
import AppTable from "components/AppComponents/AppTable";
import AppTableSearch from "components/AppComponents/AppTableSearch";
import AppTaskCard from "components/AppComponents/AppTaskCard";
import { getStatus } from "components/AppComponents/CustomField";
import FilterDrawer from "components/CustomPopup";
import { communityStyles, StyledMenuItem } from "components/StyledComponents";
import { useVerunaPriorityQuery, useVerunaUsersQuery } from "hooks/useDropDown";
import { useRef, useState } from "react";
const options = [
  { value: "ACTIVE", label: "Status: Active" },
  { value: "INACTIVE", label: "Status: Inactive" },
  { value: "highToLow", label: "Insured Value: High to Low" },
  { value: "lowToHigh", label: "Insured value: Low to High" },
];

export default function TaskTable({
  isLoading,
  height = 400,
  onSelectionChange,
  taskList = [],
  filters,
  handleSearch,
  handleChangePage,
  page,
  selectedRows = [],
}) {
  const anchorRef = useRef(null);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(null);
  const { data: assigneToData, isLoading: assigneToLoading } =
    useVerunaUsersQuery();
  const { data: priorityData } = useVerunaPriorityQuery();
  // const [selectedPriority, setSelectedpriority] = useState(priorityData);
  const [selectedPriority, setSelectedPriority] = useState([
    { name: "High", color: "#E81616", selected: false },
    { name: "Medium", color: "#EB6C0B", selected: false },
    { name: "Low", color: "#DEC013", selected: false },
  ]);

  const [selectedProperty, setSelectedProperties] = useState([
    { id: 1, data: "Desert Springs", selected: false },
    { id: 2, data: "Rose Dale", selected: false },
    { id: 3, data: "Rose Dal", selected: false },
    { id: 4, data: "Oak Ridge Estates", selected: false },
    { id: 5, data: "Mountain Vista", selected: false },
  ]);
  // const toggleFilter = (id, PriorityName) => {
  //   setSelectedProperties((prev) =>
  //     prev.map((filter) =>
  //       filter.id === id ? { ...filter, selected: !filter.selected } : filter
  //     )
  //   );
  //   setSelectedPriority((prev) =>
  //     prev.map((filter) =>
  //       filter.name === PriorityName ? { ...filter } : filter
  //     )
  //   );
  // };
  const toggleFilter = (idOrName) => {
    if (selectedTab === "Properties") {
      // Update `selectedProperty`
      setSelectedProperties((prev) =>
        prev.map((filter) =>
          filter.id === idOrName
            ? { ...filter, selected: !filter.selected }
            : filter
        )
      );
    } else if (selectedTab === "Priority") {
      // Update `selectedPriority`
      setSelectedPriority((prev) =>
        prev.map((priority) =>
          priority.name === idOrName
            ? { ...priority, selected: !priority.selected }
            : priority
        )
      );
    }
  };

  const pageSize = 10;

  const columns = [
    {
      field: "index",
      headerName: "S.No",
      headerClassName: "bold-header",
      renderCell: (row, indx) => {
        return <Typography>{(page - 1) * pageSize + indx + 1}</Typography>;
      },
    },
    {
      field: "taskName",
      headerName: "Task Name",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "assignedTo",
      headerName: "Assigned to",
      flex: 1,
    },
    {
      field: "dueDateString",
      headerName: "Due Date",
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
    },

    {
      field: "status",
      headerName: "Status",
      align: "center",
      renderCell: (row) => {
        if (row?.status != null && row?.status != "null") {
          return (
            <Typography
              color={row?.status === "ACTIVE" ? "success" : "error"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={0.5}
            >
              {/* <FiberManualRecordIcon fontSize="12px" /> */}
              {row?.status === "ACTIVE" ? "Active" : "Inactive"}
            </Typography>
          );
        } else {
          return "-";
        }
      },
    },
    {
      field: "action",
      headerName: "Action",
      align: "center",
      renderCell: (row) => (
        <IconButton>
          <MoreVert
            // onClick={(e) => {
            //   e.stopPropagation();
            //   onSelectionChange([]);
            //   setMenuAnchorEl(e.currentTarget);
            // }}
            onClick={(e) => {
              e.stopPropagation();
              setMenuAnchorEl(e.currentTarget);
            }}
            color="secondary"
          />
        </IconButton>
      ),
    },
  ];

  const filteredRows = taskList?.content?.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleMenuAnchorClose = () => {
    setMenuAnchorEl(null);
  };

  const renderMenuComponent = () => {
    return (
      <>
        <StyledMenuItem onClick={() => console.log("task")}>
          View details
        </StyledMenuItem>
      </>
    );
  };

  const PriorityFilter = () => {
    return (
      <>
        <Button
          variant="outlined"
          color="black"
          endIcon={<FilterAltIcon sx={{ width: "22px", height: "24px" }} />}
          sx={{
            height: "42px",
            borderRadius: "10px",
            borderWidth: "0.5px",
            borderColor: "#000",
            fontSize: "16px",
            fontWeight: "500",
            "&:hover": { backgroundColor: "#E9F3FF" },
          }}
        >
          {" "}
          {"Filter"}{" "}
        </Button>
      </>
    );
  };

  const renderPriorityComponent = (e) => {
    return (
      <>
        <StyledMenuItem onClick={() => console.log("task")}>
          View details
        </StyledMenuItem>
        <StyledMenuItem onClick={() => console.log("task")}>
          Send EMail
        </StyledMenuItem>
        <StyledMenuItem onClick={() => console.log("task")}>
          Mark as completed
        </StyledMenuItem>
      </>
    );
  };
  const handleClick = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };
  const onClose = () => {
    setModal(null);
  };
  return (
    <Box sx={communityStyles.container(height)}>
      <>
        <AppTableSearch
          placeholder="Search Task"
          searchTerm={filters?.search}
          onSearchChange={handleSearch}
          icons={[
            {
              component: <PriorityFilter />,
              onClick: (e) => handleClick(e),
              IconButton: true,
            },
            {
              component: <SwapVert />,
              onClick: (e) => handleSort(e),
            },
          ]}
        />
        {/* <Button
          onClick={(e) => {
            console.log(e.currentTarget, "currentTarget");
            setModal(e.currentTarget);
          }}
          ref={anchorRef}
        >
          View Details
        </Button> */}
        <FilterDrawer
          selectedProperty={assigneToData?.records || selectedProperty}
          selectedPriority={selectedPriority}
          setSelectedPriority={setSelectedPriority}
          // toggleFilter={toggleFilter}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          setSelectedProperties={setSelectedProperties}
        />
        <AppTable
          rowKey="taskId"
          isLoading={isLoading}
          columns={columns}
          rows={filteredRows || []}
          getStatus={getStatus}
          onSelectionChange={onSelectionChange}
          currentPage={page}
          totalItems={taskList?.totalElements}
          pageSize={pageSize}
          onPageChange={handleChangePage}
          selected={selectedRows}
          noDataText="No Task Found"
        />
      </>

      {/* <AppMenu
                anchorEl={menuAnchorEl}
                handleClose={handleMenuAnchorClose}
                renderComponent={renderMenuComponent()}
            /> */}
      <AppMenu
        anchorEl={modal}
        handleClose={() => setModal(null)}
        renderComponent={
          <AppTaskCard
            roleName="Richard"
            role="Property Manager Name"
            type="GRT"
            number="+1 432 567 987"
            onClose={onClose}
          />
        }
        borderRadius={"20px"}
        width={"20vw"}
      />

      <AppMenu
        anchorEl={menuAnchorEl}
        handleClose={handleMenuAnchorClose}
        renderComponent={renderPriorityComponent()}
      />
    </Box>
  );
}