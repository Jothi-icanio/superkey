import {
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import AppTable from "components/AppComponents/AppTable";
import { getStatus } from "components/AppComponents/CustomField";
import { communityStyles } from "components/StyledComponents";
import { useState } from "react";

const options = [
    { value: "ACTIVE", label: "Status: Active" },
    { value: "INACTIVE", label: "Status: Inactive" },
    { value: "highToLow", label: "Insured Value: High to Low" },
    { value: "lowToHigh", label: "Insured value: Low to High" },
];

export default function VerunaCommunitiesTable({
    height = 400,
    isLoading = false,
    communityList = [],
}) {

    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1)
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


    const filteredRows = communityList?.filter((row) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );



    return (
        <Box sx={communityStyles.container(height)}>
            <>


                <AppTable
                    checkBox={false}
                    rowKey="communityId"
                    isLoading={isLoading}
                    columns={columns}
                    rows={filteredRows || []}
                    getStatus={getStatus}
                    pageSize={pageSize}
                />
            </>




        </Box>
    );
}
