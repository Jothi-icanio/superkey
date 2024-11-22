import { Grid2 as Grid } from "@mui/material";
import mapImg from "assets/images/icons/map.png";
import AppAutoComplete from "components/AppComponents/AppAutoComplete";
import AppLabelComponent from "components/AppComponents/AppLabelComponent";
import { Image } from "components/StyledComponents";
import { useState } from "react";

const options = [
  {
    label:
      "Phoenix North Estates, Phoenix, AZ 85023, USAPhoenix North Estates, Phoenix, AZ 85023, USA",
    value: "AZ",
  },
  { label: "New York, Phoenix, NY 54321, USA", value: " " },
  { label: "India, Phoenix", value: "LA" },
  { label: "New ", value: " lj" },
  { label: "New1", value: " d" },
  { label: "New ", value: " 5" },
  { label: "New ", value: " 7" },
  { label: "New ", value: " 8" },
];

const CommunityAddress = ({ setFieldValue, formValues, touched, errors }) => {
  const [address, setAddress] = useState("");
  const onSearch = (searchString) => {
    console.log(searchString);
    setAddress(searchString);
  };
  return (
    <Grid
      container
      textAlign={"center"}
      justifyContent={"center"}
      rowSpacing={4}
    >
      <Grid item size={{ xs: 10 }}>
        <Image height={"20vh"} src={mapImg} alt="map" />
      </Grid>
      <Grid item>
        <AppLabelComponent
          gap={2}
          variant="h4"
          label={"What is the address of your community?"}
        >
          <AppAutoComplete
            name="communityAddress"
            freesolo
            error={touched.communityAddress && errors.communityAddress}
            onChange={setFieldValue}
            searchString={address}
            value={formValues.communityAddress}
            options={options}
            placeholder="Search your address"
            onSearch={onSearch}
          />
        </AppLabelComponent>
      </Grid>
    </Grid>
  );
};

export default CommunityAddress;
