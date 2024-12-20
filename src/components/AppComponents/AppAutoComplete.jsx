import styled from "@emotion/styled";
import {
  Autocomplete,
  Box,
  CircularProgress,
  Divider,
  TextField,
  Typography,
  createFilterOptions,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AppToolTip from "./AppToolTip";
import { removeExtraSpaces } from "pages/community/onboarding/utils";

const AddManuallyButton = styled(Typography)({
  color: "#2954E1",
  cursor: "pointer",
  marginLeft: "auto",
  fontSize: "0.875rem",
  fontWeight: 500,
  minWidth: "fit-content"
});

const AddManuallyOptionWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  cursor: "default !important", // Prevent click event on entire option
  "&:hover": {
    backgroundColor: "transparent !important", // Prevent hover color change
  },
  wordBreak: "break-all",
  gap: "8"
});
const OptionWrapper = styled(Box)(({ theme, isSelected }) => ({
  // px: 2,
  display: "flex",
  alignItems: "center",
  backgroundColor: isSelected ? theme.palette.info.light : "transparent",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  wordBreak: "break-all",
  gap: "8"

}));

const filterOption = createFilterOptions();

const AppAutoComplete = ({
  freeSolo = true,
  options = [],
  nameParam = "name",
  valueParam = "id",
  placeholder = "type",
  inputValue,
  error,
  onChange,
  name,
  value,
  onSearch,
  onBlur,
  loading = false,
  filter = true,
  searchKey = "",
  variant = "outlined",
  disableClearable,
  disabled,
  readOnly = false,
  focused,
  size = 'small',
  multiline = false,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleAddManually = (customOption) => {
    const optionValue = customOption[nameParam]
    const newOption = {
      ...customOption,
      [nameParam]: removeExtraSpaces(optionValue),
    };
    onChange?.({ target: { name, value: newOption } });
    onSearch?.("");

    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    onSearch?.("");
  };
  const handleInputChange = (_, newInputValue, reason) => {
    if (reason == "input") {
      onSearch?.(removeExtraSpaces(newInputValue), searchKey ?? name);
    }
  };

  const handleChange = (event, newValue) => {
    onChange?.({ target: { name, value: newValue } });
  };
  //Todo: Need to check this
  const handleBlur = (event) => {
    onBlur?.({ target: { name, value } });
  };
  const isLoading = !options?.length && loading;

  return (
    <Autocomplete

      {...props}
      disableClearable={isLoading || disableClearable}
      name={name}
      value={value}
      options={options}
      readOnly={readOnly}
      clearOnBlur
      openOnFocus
      disabled={isLoading || disabled}
      freeSolo={freeSolo || !focused}
      onChange={handleChange}
      onBlur={handleBlur}
      onInputChange={handleInputChange}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        return option[nameParam] || "";
      }}
      filterOptions={(options, params) => {
        const filtered = filter ? filterOption(options, params) : options;
        if (freeSolo && params.inputValue.trimStart() !== "") {
          return [
            {
              id: "add-manually",
              [nameParam]: removeExtraSpaces(params?.inputValue),
              isCustom: true,
            },
            ...filtered,
          ];
        }

        return filtered;
      }}

      size={size}
      renderInput={(params) => (
        <TextField
          focused={focused}
          multiline={multiline}
          variant={variant}
          {...params}
          placeholder={placeholder}
          error={Boolean(error)}
          helperText={error}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? (
                    <AppToolTip placement="bottom" title="Fetching...">
                      <CircularProgress color="inherit" size={20} />
                    </AppToolTip>
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
      renderOption={(props, option) => {
        if (option?.isCustom) {
          return (
            <>
              <AddManuallyOptionWrapper
                {...props}
                key={option[valueParam]}
                onClick={(event) => event.stopPropagation()}
              >
                <Typography variant="subtitle1">{option[nameParam]}</Typography>
                <AddManuallyButton
                  role="button"
                  tabIndex={0}
                  onClick={(event) => {
                    handleAddManually(option);
                  }}
                >
                  Add Manually
                </AddManuallyButton>
              </AddManuallyOptionWrapper>
              <Divider />
            </>
          );
        }
        const isSelected = value && option[nameParam] === value[nameParam] && option[valueParam] === value[valueParam];

        return (
          <>
            <OptionWrapper
              isSelected={isSelected}
              {...props}
              key={option[valueParam]}
              aria-selected={isSelected ? "true" : "false"}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: isSelected ? "bold" : "normal" }}
              >
                {option[nameParam]}
              </Typography>
            </OptionWrapper>
            <Divider />
          </>
        );
      }}
      ListboxProps={{
        sx: {
          width: "auto",
          maxHeight: "153px",
          overflowY: "auto",
          padding: 0,
          color: "inherit",
          "& .MuiAutocomplete-option": {
            minHeight: "45px",
            display: "flex",
            alignItems: "center",
            "&:hover, &:focus": {
              backgroundColor: theme.palette.info.light,
            },
          },
        },
      }}
      componentsProps={{
        paper: {
          sx: {
            width: "auto",
            background: theme.palette.primary.lighter,
            marginTop: 2,
            borderRadius: 2,
            "& .MuiAutocomplete-noOptions": {
              color: "inherit",
              fontWeight: "bold",
            },
          },
        },
      }}
      noOptionsText="No data found"
      selectOnFocus
      fullWidth
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => {
        handleClose();
      }}
    />
  );
};

export default AppAutoComplete;
