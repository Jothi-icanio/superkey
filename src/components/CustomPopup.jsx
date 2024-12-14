import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Checkbox,
  FormControlLabel,
  Button,
  Popover,
} from "@mui/material";
import AppPriorityItems from "./AppPriorityComponent";

const FilterDrawer = ({
  openFilter,
  setOpenFilter,
  selectedProperty = [],
  selectedPriority = [],
  setSelectedPriority,
  toggleFilter,
  anchorEl,
}) => {
  const [selectedTab, setSelectedTab] = useState("Properties");
  const isAnyFilteredSelect = selectedProperty.some(
    (filter) => filter.selected
  );

  if (!openFilter) return null;

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const handleApply = () => {
    if (!isAnyFilteredSelect) return;
    const appliedFilters = selectedProperty.filter((filter) => filter.selected);
    console.log("Applied Filters:", appliedFilters);
    setOpenFilter(false);
  };

  return (
    <Popover
      open={openFilter}
      anchorEl={anchorEl}
      onClose={() => setOpenFilter(false)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{
        "& .MuiPopover-paper": {
          width: "406px",
          borderRadius: "10px",
          overflow: "hidden",
          padding: "8px",
        },
      }}
    >
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Button
            variant={selectedTab === "Properties" ? "contained" : "none"}
            color={selectedTab === "Properties" ? "none" : "default"}
            onClick={() => handleTabClick("Properties")}
            sx={{
              width: "155px",
              height: "41px",
              margin: "8px 7px",
              borderRadius: "8px",
              backgroundColor:
                selectedTab === "Properties" ? "#E0EDFF" : "transparent",
              color: selectedTab === "Properties" ? "#2954E1" : "black",
            }}
          >
            Properties
          </Button>
          <Button
            variant={selectedTab === "Priority" ? "contained" : "none"}
            color={selectedTab === "Priority" ? "none" : "default"}
            onClick={() => handleTabClick("Priority")}
            sx={{
              width: "155px",
              height: "41px",
              borderRadius: "8px",
              backgroundColor:
                selectedTab === "Priority" ? "#E0EDFF" : "transparent",
              color: selectedTab === "Priority" ? "#2954E1" : "black",
            }}
          >
            Priority
          </Button>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 2, marginLeft: "-20px" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "18rem",
            overflow: "scroll",
            padding: "8px",
          }}
        >
          <Box sx={{ mt: 1 }}>
            {selectedTab === "Properties"
              ? selectedProperty.map((filter, index) => (
                  <FormControlLabel
                    key={filter.id}
                    control={
                      <Checkbox
                        checked={filter.selected}
                        onChange={() => toggleFilter(filter.id)}
                      />
                    }
                    label={filter.data}
                    sx={{ display: "block", mb: 1 }}
                  />
                ))
              : selectedPriority.map((priority) => (
                  <AppPriorityItems
                    key={priority.name}
                    name={priority.name}
                    color={priority.color}
                    isSelected={priority.name === selectedPriority}
                    onClick={() => setSelectedPriority(priority.name)}
                  />
                ))}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button
          variant="outlined"
          onClick={() => setOpenFilter(false)}
          sx={{
            borderRadius: "10px",
            fontWeight: 500,
            fontSize: "14px",
            textTransform: "none",
            width: "45%",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleApply}
          disabled={!isAnyFilteredSelect}
          sx={{
            borderRadius: "10px",
            fontWeight: 500,
            fontSize: "14px",
            textTransform: "none",
            width: "45%",
          }}
        >
          Apply
        </Button>
      </Box>
    </Popover>
  );
};

export default FilterDrawer;