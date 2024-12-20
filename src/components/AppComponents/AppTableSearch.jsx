import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { communityStyles } from "components/StyledComponents";

const AppTableSearch = ({
  placeholder = "Search...",
  searchTerm,
  onSearchChange,
  icons = [],
}) => {
  return (
    <Box sx={communityStyles.header}>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={communityStyles.searchIcon} />
            </InputAdornment>
          ),
        }}
        sx={communityStyles.searchInput}
      />
      <Box sx={communityStyles.iconGroup}>
        {icons.map((icon, index) =>
          icon?.iconButton ? (
            <IconButton key={index} onClick={icon.onClick}>
              {icon.component}
            </IconButton>
          ) : (
            <div onClick={icon.onClick} key={index}>
              {icon.component}
            </div>
          )
        )}
      </Box>
    </Box>
  );
};

export default AppTableSearch;
