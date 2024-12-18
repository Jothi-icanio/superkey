import { Drawer } from "@mui/material";

import AppGrid from "components/AppComponents/AppGrid";
import { useCommunityList, useDeleteCommunityById, useOffBoardCommunity } from "hooks/useCommunity";
import CommunityTable from "pages/community/CommunityTable";
import { RadiusStyledButton } from "components/StyledComponents";
import { useEffect, useState } from "react";
import { useDebounceFn } from "utils/helpers";
import EditCommunity from "./edit-community";
import OnboardingIndex from "./onboarding";
import ConfirmationModal from "components/AppComponents/AppConfirmationModal";
import { useAuthCookies } from "utils/cookie";

const initialValue = {
  page: 1,
  size: 10,
  sort: "",
  order: "",
  status: "",
  search: "",
};

const CommunityOnboarding = () => {
  const [communityData, setCommunitydata] = useState("");
  const [page, setPage] = useState(1);
  const [edit, setEdit] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filters, setFilters] = useState(initialValue);
  const [modal, setModal] = useState(false);
  const [offboardData, setOffboardData] = useState([])
  const { getCookie } = useAuthCookies()

  const cmcId = getCookie('cmcId')
  
  const {
    mutate: getCommunityList,
    data: communityListData,
    isLoading: communityListLoading,
  } = useCommunityList();

  const { content } = communityListData?.data ?? {};
  const handleChangePage = (event, newPage) => {
    // fetchData(filters.sort, filters.search, newPage);
    setPage(newPage);
    setFilters({ ...filters, page: newPage })
    handleSelectionChange([])
    setOffboardData([])
  };
  //handlers
  const openDrawer = (id) => {
    setCommunitydata(id);
    setEdit(true);
  };
  const closeDrawer = () => {
    setEdit(false);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const { mutate } = useOffBoardCommunity();
  const handleOffBoard = () => {
    // const payload = {
    //   mappings: [
    //     {
    //       communityId: communityData?.communityId,
    //       cmcId: communityData?.communityId,
    //     },
    //   ],
    // };
    const payload = {
      mappings: selectedRows.map(row => ({
        communityId: row,
        cmcId: cmcId,
      })),
    };
    const msg = payload.mappings.length;
    mutate({payload,msg});
    setModal(!modal);
    handleSelectionChange([])
    setOffboardData([])
  };

  const handleSelectionChange = (selected) => {
    setSelectedRows(selected);
  };

  const handleChangeRadio = (value) => {
    let newValue = filters.sort == value ? null : value
    setFilters((prev) => ({
      ...prev,
      sort: newValue,
    }));

    fetchData(newValue, filters.search, 1);
    setPage(1)
  };

  const fetchData = (sort, search, page = filters?.page) => {
    const sortData = sort === "ACTIVE" || sort === "INACTIVE" ? "" : "name";
    const orderByData =
      sort === "lowToHigh" ? "asc" : "desc";
    const statusData = sort === "ACTIVE" || sort === "INACTIVE" ? sort : "";
    const body = {
      page: page || 1,
      size: filters.size || 10,
      sortBy: sortData,
      orderBy: orderByData,
      status: statusData,
      search: search || "",
    };
    getCommunityList(body);
  };

  const onSearch = useDebounceFn((searchString) => {
    fetchData(filters.sort, searchString, 1);
    setPage(1)
  }, 500);

  const handleSearch = (value) => {
    setFilters({ ...filters, page: 1, search: value });

    onSearch(value);
  };

  useEffect(() => {
    fetchData(filters.sort, filters.search);
  }, []);
  const refetch = () => {
    fetchData(filters.sort, filters.search, 1);
    setPage(1)
  };
  return (
    <AppGrid container spacing={4}>
      <AppGrid
        item
        size={{ xs: 12 }}
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <AppGrid item sx={{ display: "flex", gap: 2 }}>
          <RadiusStyledButton variant="contained">
            Communities
          </RadiusStyledButton>
          <RadiusStyledButton
            color="#E9E9E9"
            height="50px"
            width="100px"
            textColor="#7B828F"
            variant="contained"
          >
            Assets
          </RadiusStyledButton>
        </AppGrid>

        <AppGrid item sx={{ display: "flex", gap: 2 }}>
          {selectedRows.length > 0 ? (
            <RadiusStyledButton
              color="#FFFFFF"
              textColor="#E12929"
              width="227px"
              height="50px"
              borderRadius="10px"
              onClick={handleModal}
              sx={{
                border: "0.5px solid #E12929",
              }}
            >
              Off Board Community
            </RadiusStyledButton>
          ) : (
            <OnboardingIndex refetch={refetch} />
          )}
        </AppGrid>
      </AppGrid>

      <AppGrid item size={{ xs: 12 }}>
        <CommunityTable
          setOffboardData={setOffboardData}
          height={"80vh"}
          isLoading={communityListLoading}
          communityList={communityListData?.data || []}
          onSelectionChange={handleSelectionChange}
          openPopup={openDrawer}
          handleOffBoard={handleOffBoard}
          communityInfo={communityData}
          setCommunityInfo={setCommunitydata}
          filters={filters}
          handleChangeRadio={handleChangeRadio}
          handleSearch={handleSearch}
          handleChangePage={handleChangePage}
          page={page}
          selectedRows={selectedRows}
          setPage={setPage}
          rowSecondKey={`communityManager.managerId`}
          offboardData={offboardData}
          cmcId={cmcId}
        />
      </AppGrid>
      <Drawer sx={{
        "& .MuiDrawer-paper": {
          width: "50%",
        },
      }} open={edit} onClose={closeDrawer} anchor="right">
        <EditCommunity
          onClose={closeDrawer}
          communityData={communityData}
          refetch={refetch}
          cmcId={cmcId}
        />
      </Drawer>
      <ConfirmationModal
        open={modal}
        onClose={handleModal}
        message={
          "Do you want to off board selected communities?"
        }
        confirmLabel={"Yes"}
        cancelLabel={"No"}
        onConfirm={handleOffBoard}
        onCancel={handleModal}
      />
    </AppGrid>
  );
};

export default CommunityOnboarding;
