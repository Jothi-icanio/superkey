import { MoreVert, RadioButtonChecked, RadioButtonUnchecked, SwapVert } from "@mui/icons-material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import ConfirmationModal from "components/AppComponents/AppConfirmationModal";
import AppMenu from "components/AppComponents/AppMenu";
import AppTable from "components/AppComponents/AppTable";
import AppTableSearch from "components/AppComponents/AppTableSearch";
import { getStatus } from "components/AppComponents/CustomField";
import { communityStyles, StyledMenuItem } from "components/StyledComponents";
import { formatAsDollar } from "pages/community/onboarding/utils";
import { useState } from "react";

const options = [
    { value: "ACTIVE", label: "Status: Active" },
    { value: "INACTIVE", label: "Status: Inactive" },
    { value: "highToLow", label: "Insured Value: High to Low" },
    { value: "lowToHigh", label: "Insured value: Low to High" },
];

export default function VerunaCommunitiesTable({
    isLoading,
    height = 400,
    onSelectionChange,
    communityList,

    handleChangePage,
    page,
    selectedRows
}) {


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
            field: "name",
            headerName: "Community Name",
            flex: 1,
        },


    ];




    return (
        <Box sx={communityStyles.container(height)}>
            <>


                <AppTable
                    rowKey="communityId"
                    isLoading={isLoading}
                    columns={columns}
                    rows={flatRows || []}
                    getStatus={getStatus}
                    onSelectionChange={onSelectionChange}
                    currentPage={page}
                    totalItems={communityList?.totalElements}
                    pageSize={pageSize}
                    onPageChange={handleChangePage}
                    selected={selectedRows}
                />
            </>




        </Box>
    );
}
