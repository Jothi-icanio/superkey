import { MoreVert, SwapVert } from "@mui/icons-material";
import {
    FormControl,
    FormControlLabel,
    IconButton,
    MenuItem,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import AppMenu from "components/AppComponents/AppMenu";
import AppPagination from "components/AppComponents/AppPagination";
import AppTable from "components/AppComponents/AppTable";
import AppTableSearch from "components/AppComponents/AppTableSearch";
import { getStatus } from "components/AppComponents/CustomField";
import Loader from "components/Loader";
import { communityStyles, StyledMenuItem } from "components/StyledComponents";
import { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const options = [
    { value: "active", label: "Status:Active" },
    { value: "inActive", label: "Status:Inactive" },
    { value: "highToLow", label: "Insured Value:High to Low" },
    { value: "lowToHigh", label: "Insured value:Low to High" },
];

export const rows = [
    {
        id: 1,
        name: "Desert Springs",
        propertyManager: "Sarah Johnson",
        claims: 3,
        insured: "$200,000",
    },
    {
        id: 2,
        name: "Rose Dale",
        propertyManager: "Micheal lee",
        claims: 2,
        insured: "$200,000",
    },
    {
        id: 3,
        name: "Prestige",
        propertyManager: "Emily Davis",
        claims: 1,
        insured: "$200,000",
    },
    {
        id: 4,
        name: "Oak Ridge Estates",
        propertyManager: "David Kim",
        claims: 2,
        insured: "$200,000",
    },
    {
        id: 5,
        name: "Mountain Vista",
        propertyManager: "",
        claims: 3,
        insured: "$200,000",
    },
    {
        id: 6,
        name: "Willow Creek",
        propertyManager: "Christopher Allen",
        claims: 1,
        insured: "$200,000",
    },
    {
        id: 7,
        name: "Uptown Plazza",
        propertyManager: "Ashley Tailor",
        claims: 1,
        insured: "$200,000",
    },
    {
        id: 8,
        name: "Farmland Estates",
        propertyManager: "Ethen Carter",
        claims: 2,
        insured: "$200,000",
    },
    {
        id: 9,
        name: "Rv Park",
        propertyManager: "Olivia Harris",
        claims: 2,
        insured: "$200,000",
    },
    {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    }, {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    }, {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    }, {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    }, {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    }, {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    }, {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    }, {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    }, {
        id: 10,
        name: "Tech Campus Housing",
        propertyManager: "Samuel Wilson",
        claims: 2,
        insured: "$200,000",
    },
];

export default function VerunaCommunityTable({
    isLoading,
    height = 400,
    tableData = [],
    totalItems,
    setSearchTerm,
    searchTerm,
    page,
    pageSize,
    handleChangePage,
    handleUISearch
}) {
    console.log(totalItems)
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
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
            field: "name",
            headerName: "Community Name",
            flex: 1,
        },
        {
            field: `type`,
            headerName: "Document Type",
        },
        {
            field: "country",
            headerName: "Country",
        },
        {
            field: "state",
            headerName: "State",
        },
        {
            field: "city",
            headerName: "City",
        },
        //Future use
        // {
        //   field: "claims",
        //   headerName: "Claims",
        //   renderCell: (row) => {
        //     return <Typography color="success">{row?.claims}</Typography>;
        //   },
        // },

        {
            field: "status",
            headerName: "Status",
            align: "center",
            renderCell: (row) => {
                return (
                    <Typography
                        color={"success"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={0.5}
                    >
                        <FiberManualRecordIcon fontSize="12px" />
                        {"Active"}
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
                            onSelectionChange([])
                            setMenuAnchorEl(e.currentTarget);
                            setCommunityInfo(row);
                        }}
                        color="secondary"
                    />
                </IconButton>
            ),
        },
    ];

    const renderMenuComponent = () => {
        return (
            <>
                <StyledMenuItem >View details</StyledMenuItem>
                <StyledMenuItem >
                    Off-board Community
                </StyledMenuItem>
            </>
        );
    };
    console.log(tableData, pageSize)
    return (
        <Box sx={communityStyles.container(height)}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <AppTableSearch
                        placeholder="Search Communities"
                        searchTerm={searchTerm}
                        onSearchChange={handleUISearch}
                        icons={[
                            {
                                component: <SwapVert />,
                                onClick: (e) => handleSort(e),
                            },
                        ]}
                    />

                    {tableData.length === 0 ? (
                        <Box sx={communityStyles.noData}>No Communities Found</Box>
                    ) : (
                        <>
                            <AppTable
                                checkBox={false}
                                columns={columns}
                                rows={tableData || []}
                                getStatus={getStatus}
                                customStyles={{ claims: communityStyles.claims }}
                            />
                            <AppPagination
                                currentPage={page}
                                totalItems={totalItems}
                                pageSize={pageSize}
                                onPageChange={handleChangePage}
                            />
                        </>
                    )}
                </>
            )}
            <AppMenu
                anchorEl={menuAnchorEl}
                handleClose={() => setMenuAnchorEl(null)}
                renderComponent={renderMenuComponent()}
            />
        </Box>
    );
}
