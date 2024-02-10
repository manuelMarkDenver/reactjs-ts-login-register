import { useState } from "react";

import { Box, Tab, Tabs, Stack } from "@mui/material";

import logo from "../assets/images/logo.png";

import Form from "./Form";

export type activeButtonStyleProps = {
  backgroundColor: string;
  color: string;
  borderRadius: string;
  padding: string;
  border: string;
  cursor: string;
  outline: string;
  boxShadow: string;
  "&:hover": {
    backgroundColor: string;
    color: string;
  };
};

const activeButtonStyle: activeButtonStyleProps = {
  backgroundColor: "#56CBCB",
  color: "black",
  borderRadius: "30px",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  outline: "none",
  boxShadow: "0px 3px 6px #00000029",
  "&:hover": {
    backgroundColor: "#56CBCB",
    color: "white",
  },
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{}}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const FormContainer = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(Number(newValue));
  };

  const defaultTabStyle = {
    color: "#56CBCB",
    border: "1px solid #90CACA",
    borderRadius: "30px",
    ...(tabValue === 0 ? { borderLeft: "none" } : { borderRight: "none" }),
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "605px",
        background:
          "transparent linear-gradient(139deg, #FFFFFF4D 0%, #FFFFFF66 100%) 0% 0% no-repeat padding-box;",
        boxShadow: "inset 0px 3px 9px #00000059, 0px 5px 18px #000000",
        border: "1px solid #90CACA",
        borderRadius: "30px",
        opacity: 0.8,
        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",
        color: "black",
      }}
    >
      <Box
        sx={{
          width: "256px",
          position: "absolute",
          top: -100,
        }}
      >
        <img src={logo} alt="logo" />
      </Box>
      <Stack
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "21%",
          gap: "80px",
        }}
      >
        <Tabs
          aria-label="secondary tabs example"
          onChange={handleChange}
          value={tabValue}
          sx={{
            width: "100%",
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab
            label="Login"
            sx={{
              flex: 1,
              "&": defaultTabStyle,
              "&.Mui-selected": activeButtonStyle,
              marginRight: "-40px",
              fontWeight: "extraBold",
            }}
          />
          <Tab
            label="Register"
            sx={{
              flex: 1,
              "&": defaultTabStyle,
              "&.Mui-selected": activeButtonStyle,
              fontWeight: "extraBold",
            }}
          />
        </Tabs>
        <Box>
          <CustomTabPanel value={tabValue} index={0}>
            <Form activeButtonStyle={activeButtonStyle} tabValue={tabValue} />
          </CustomTabPanel>
          <CustomTabPanel value={tabValue} index={1}>
            <Form activeButtonStyle={activeButtonStyle} tabValue={tabValue} />
          </CustomTabPanel>
        </Box>
      </Stack>
    </Box>
  );
};

export default FormContainer;
