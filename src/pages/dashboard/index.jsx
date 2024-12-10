// material-ui
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// project import
import MainCard from "components/MainCard";

// assets
import AppGrid from "components/AppComponents/AppGrid";
import AppModal from "components/AppComponents/AppModal";
import AppSkeletonWrapper from "components/AppComponents/AppSkeletonWrapper";
import MainTabs from "components/MainTabs";
import {
  useGetActiveAndCompletedTaskByFilter,
  useGetDashboardMetrics,
} from "hooks/useDashboard";
import VerunaCommunitiesTable from "pages/community/onboarding/VerunaCommunitiesTable";
import { ColorBox } from "pages/component-overview/color";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import RenewalPieChart from "./RenewalPieChart";
import TaskTable from "./TaskTable";

// ==============================|| DASHBOARD - DEFAULT ||============================== //
const tabs = [
  { label: "Active Task", value: "active" },
  { label: "Completed", value: "completed" },
];

const renewalChartData = [
  {
    "name": "30 Days",
    "value": 2
  },
  {
    "name": "60 Days",
    "value": 6
  },
  {
    "name": "90 Days",
    "value": 10
  }
]

export default function DashboardDefault() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);
  const [open, setOpen] = useState(false);

  const { data: dashboardData, isLoading: isWidgetLoading } =
    useGetDashboardMetrics();
  const {
    insuredCommunities,
    totalCommunities,
    totalCoverageValue,
    totalPremium,
    upcomingRenewals,
    totalCancelledNonRenewedPolicies,
    totalClaimsPaid,
    accountBalance,
    renewals,
  } = dashboardData?.data ?? {};

  const {
    data: taskData,
    mutate: fetchActiveAndCompletedTaskByFilter,
    isLoading: isTaskLoading,
  } = useGetActiveAndCompletedTaskByFilter();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    fetchData(newValue);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (status) => {
    let reqBody = {
      sort: "createdAt",
      orderBy: "desc",
      data: [
        {
          column: "status",
          operator: "contains",
          value: status ?? selectedTab,
        },
      ],
    };
    fetchActiveAndCompletedTaskByFilter(reqBody);
  };

  const navigate = useNavigate()
  return (
    <AppGrid container rowSpacing={3} columnSpacing={2}>
      <AppGrid size={{ xs: 12 }}>
        <MainCard
          title="Alerts"
          secondary={"Full View"}
          sx={{
            mt: 2,
          }}
          contentSX={{ maxHeight: "9rem" }}
        >
          <Stack rowGap={2}>
            <ColorBox
              bgcolor="error.lighter"
              title="Rose Dale s Boiler room coverage is expiring on 25 th October due to non payment of new quote."
              duration="1hr"
              dark
            />
            <ColorBox
              bgcolor="grey.300"
              title="2 Assets in GRT Layout are not covered yet. Cost impact is $60,000"
              duration="2hr ago"
              dark
            />
          </Stack>
        </MainCard>
      </AppGrid>
      <AppGrid size={{ xs: 12, md: 6, lg: 6 }}>
        <AppGrid container rowSpacing={2} columnSpacing={2}>
          <AppGrid size={{ xs: 12 }}>
            <AppSkeletonWrapper loading={isWidgetLoading} height={'200px'}>

              <MainCard title="Communities" secondary={"Full View"} secondaryAction={() => navigate('/community/onboarding')} >
                <Stack spacing={2}>
                  <Typography variant="h6" >Communities Managed</Typography>
                  <Typography variant="subtitle2" color="success">
                    {totalCommunities > 40 ? totalCommunities : 73}
                  </Typography>
                </Stack>
              </MainCard>
            </AppSkeletonWrapper>
          </AppGrid>
          <AppGrid size={{ xs: 12, md: 4, lg: 4 }}>
            <AppSkeletonWrapper loading={isWidgetLoading} height={'150px'}>

              <MainCard>
                <Stack rowGap={4} textAlign={"center"}>
                  <Typography variant="h6">
                    Account <br /> Balance
                  </Typography>
                  <Typography variant="subtitle2" color="success">
                    {accountBalance ?? 0}
                  </Typography>
                </Stack>
              </MainCard>
            </AppSkeletonWrapper>
          </AppGrid>
          <AppGrid size={{ xs: 12, md: 4, lg: 4 }}>
            <AppSkeletonWrapper loading={isWidgetLoading} height={'150px'}>
              <MainCard>
                <Stack rowGap={4} textAlign={"center"}>
                  <Typography variant="h6">
                    Total Claims <br /> Paid
                  </Typography>
                  <Typography variant="subtitle2" color="success">
                    {totalClaimsPaid ?? 0}
                  </Typography>
                </Stack>
              </MainCard>
            </AppSkeletonWrapper>
          </AppGrid>
          <AppGrid size={{ xs: 12, md: 4, lg: 4 }}>
            <AppSkeletonWrapper loading={isWidgetLoading} height={'150px'}>

              <MainCard>
                <Stack rowGap={4} textAlign={"center"}>
                  <Typography variant="h6">
                    Total  Cancelled
                    <br />
                    Policiies
                  </Typography>
                  <Typography variant="subtitle2" color="success">
                    {totalCancelledNonRenewedPolicies ?? 0}
                  </Typography>
                </Stack>
              </MainCard>
            </AppSkeletonWrapper>
          </AppGrid>
        </AppGrid>
      </AppGrid>
      <AppGrid size={{ xs: 12, md: 6, lg: 6 }}>
        <AppSkeletonWrapper loading={isWidgetLoading} height={'370px'}>

          <MainCard title={"Upcoming Renewals"}>
            <AppGrid size={{ xs: 12 }} justifyItems={"center"}>
              <RenewalPieChart chartData={upcomingRenewals ?? renewalChartData} />
            </AppGrid>
          </MainCard>
        </AppSkeletonWrapper>

      </AppGrid>
      <AppModal open={open} onClose={handleClose} height="auto" width="70%">
        <MainCard
          noStyles={true}
          title={"Community Users"}
          count={0}
        >
          <VerunaCommunitiesTable
            communityList={[
              {
                "communityId": "001bn00001CjK3CAAV",
                "name": "The Arbor Condominium Association, Inc."
              },
              {
                "communityId": "001bn00001CjNNdAAN",
                "name": "Fifteen Hundred Medical Office Condominium Association, Inc."
              }]}
            isLoading={false}
          />
        </MainCard>
      </AppModal>
      <AppGrid size={{ xs: 12 }}>
        <MainCard title={"Task Assigned"} secondary={"Full View"}>
          <MainTabs
            handleChange={handleChange}
            value={selectedTab}
            tabs={tabs}
          />
          <TaskTable tableData={taskData?.data || []} loading={isTaskLoading} />
        </MainCard>
      </AppGrid>
    </AppGrid>
  );
}
