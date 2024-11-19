import {
  Button,
  Drawer,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/system";

import AppCard from "components/AppComponents/AppCard";

const EditCommunity = ({ open, onClose }) => {
  const sections = [
    {
      title: "Address Details",
      fields: [
        { label: "Community Name", type: "text", value: "Desert Springs" },
        { label: "City", type: "text", value: "Flushing" },
        { label: "State", type: "text", value: "New York" },
        { label: "ZipCode", type: "text", value: "NY 11402" },
      ],
    },
    {
      title: "Community Details",
      fields: [
        {
          label: "Community Property Manager",
          type: "select",
          value: "Sarah johnson",
          options: [
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ],
        },
        { label: "Contact Number", type: "text", value: "+1 (555) 555-1234" },
        {
          label: "Community Type",
          type: "select",
          value: "",
          options: [
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ],
        },
        { label: "Email ID", type: "text", value: "sarahjohnson@gmail.com" },
      ],
    },

    {
      title: "Insurance Details",
      fields: [
        {
          label: "Insurance Value",
          type: "select",
          value: "india",
          options: [
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ],
        },
        { label: "Insurance Coverage", type: "text", value: "1,000,000" },
      ],
    },
  ];
  const Footer = () => {
    return (
      <>
        <Button>Discard</Button>
        <Button>Save Changes</Button>
      </>
    );
  };
  const CommunityForm = ({ sections }) => {
    return (
      <>
        {sections.map((section, index) => (
          <Grid
            container
            size={{ xs: 12 }}
            key={index}
            padding={1}
            spacing={2}
            direction={"column"}
          >
            <Typography variant="h3" sx={{ mb: 2 }}>
              {section.title}
            </Typography>
            <Grid container spacing={2}>
              {section.fields.map((field, idx) => (
                <Grid item size={{ xs: 6 }}>
                  <Stack rowGap={1} key={idx}>
                    <FormLabel>{field.label}</FormLabel>
                    {field.type === "text" && (
                      <TextField value={field.value} fullWidth />
                    )}
                    {field.type === "select" && (
                      <Select value={field.value} fullWidth>
                        {field.options.map((option, optionIdx) => (
                          <MenuItem key={optionIdx} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          padding: 2,
        },
      }}
    >
      <AppCard
        onClose={onClose}
        title={"Desert Springs"}
        children={<CommunityForm sections={sections} />}
        footer={<Footer />}
      />
    </Drawer>
  );
};
export default EditCommunity;
