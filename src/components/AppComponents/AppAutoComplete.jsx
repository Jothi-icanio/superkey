import styled from "@emotion/styled";
import {
    Autocomplete,
    Box,
    CircularProgress,
    Divider,
    TextField,
    Tooltip,
    Typography,
    createFilterOptions,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AppToolTip from "./AppToolTip";

const AddManuallyButton = styled(Typography)({
    color: "#2954E1",
    cursor: "pointer",
    marginLeft: "auto",
    fontSize: "0.875rem",
    fontWeight: 500,
});

const filter = createFilterOptions();

const AppAutoComplete = ({
    freeSolo = true,
    options = [],
    nameParam = "label",
    placeholder = 'type',
    inputValue,
    error,
    onChange,
    name,
    value,
    onSearch,
    onBlur,
    loading = false,
    filter = true,
    searchKey = '',
    variant = "outlined",
    disableClearable,
    disabled,
    ...props
}) => {
    const [open, setOpen] = useState(false)
    const theme = useTheme()
    const handleAddManually = (customOption) => {

        onChange(name, customOption);


        setOpen(false);
        if (!props.filter)
            onSearch('');

    }
    const handleClose = () => {
        setOpen(false);
        if (!props.filter)
            onSearch('');

    };
    const handleInputChange = (_, newInputValue, reason) => {
        if (reason == 'input') {
            onSearch(newInputValue);
        }
    }

    const handleChange = (event, newValue) => {
        onChange?.({ target: { name, value: newValue } });
    };
    const handleBlur = (event) => {
        onBlur?.({ target: { name, value } });
    };
    const isLoading = options?.length && loading
    return (
        <Autocomplete
            {...props}
            disableClearable={isLoading || disableClearable}
            name={name}
            value={value}
            options={options}
            clearOnBlur
            openOnFocus
            disabled={isLoading || disabled}
            freeSolo={freeSolo}
            onChange={(_, value) => onChange(name, value)}
            onInputChange={handleInputChange}
            getOptionLabel={(option) => {
                if (typeof option === "string") {
                    return option;
                }
                return option[nameParam] || "";
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);
                if (freeSolo && (params.inputValue !== "")) {
                    return [
                        { id: "add-manually", [nameParam]: params.inputValue, isCustom: true },
                        ...filtered,
                    ];
                }


                return filtered;
            }}
            renderInput={(params) => (
                <TextField
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
                                    {loading ? <AppToolTip placement='bottom' title='Fetching...'><CircularProgress color="inherit" size={20} /></AppToolTip> : null}
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
                            <Box
                                {...props}
                                key={option.id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    cursor: "default !important", // Prevent click event on entire option
                                    "&:hover": {
                                        backgroundColor: "transparent !important", // Prevent hover color change
                                    },
                                }}
                                onClick={(event) => event.stopPropagation()}
                            >
                                <Typography variant="subtitle1">{option[nameParam]}</Typography>
                                <AddManuallyButton
                                    role="button"
                                    tabIndex={0}
                                    onClick={(event) => {

                                        handleAddManually(option)
                                    }}
                                >
                                    Add Manually
                                </AddManuallyButton>
                            </Box>
                            <Divider />
                        </>
                    );
                }

                return (
                    <>
                        <Box
                            {...props}
                            key={option.id} // Add a key for each option
                            sx={{ px: 2 }}
                        >
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                {option[nameParam]}
                            </Typography>
                        </Box>
                        <Divider />
                    </>

                );
            }}
            ListboxProps={{
                sx: {
                    padding: 0, // Removes the default padding
                    "& .MuiAutocomplete-option": {
                        minHeight: "45px", // Set a consistent height for each option
                        display: "flex",
                        alignItems: "center", // Ensures text is vertically aligned
                        "&:hover, &:focus": {
                            color: "inherit",
                            backgroundColor: theme.palette.info.light, // Change background color on hover for regular options
                        },

                    },
                },
            }}
            componentsProps={{
                paper: {
                    sx: {
                        marginTop: 2, // Add gap
                        borderRadius: 2,
                        maxHeight: "153px", // Approximately 3 items of 51px height each
                        overflowY: "auto", // Enable scrolling if more than 3 items
                    },
                },
            }}
            fullWidth
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => {
                handleClose()
            }}
        />
    );
};

export default AppAutoComplete;
