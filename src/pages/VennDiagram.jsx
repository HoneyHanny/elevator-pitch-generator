import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import SettingsIcon from "@mui/icons-material/Settings";

const VennDiagram = () => {
  const problemStatements = [
    "How can cities reduce traffic congestion during peak hours using innovative traffic management technologies and urban planning strategies?",
    "What solutions can be implemented to enhance the accessibility and convenience of public transportation for individuals with disabilities and the elderly?",
    "How can urban transportation systems be redesigned to minimize their environmental footprint, particularly in terms of reducing carbon emissions and air pollution?",
    "What are effective ways to integrate alternative modes of transportation, such as biking, car-sharing, and electric scooters, into the existing urban transport infrastructure?",
    "How can smart city technologies be leveraged to optimize urban transportation networks, improve real-time traffic monitoring, and enhance the overall commuting experience for residents?",
  ];

  const theme = useTheme();
  return (
    <Box paddingBottom={"64px"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant='h2'
          fontWeight={"bold"}
          sx={{}}
          style={{ color: theme.palette.primary.main }}
        >
          Venn Diagram
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} paddingTop='32px'>
        <Box display='flex' justifyContent='space-around' width={"80%"}>
          <Paper
            sx={{ margin: "32px", padding: "32px", borderRadius: "32px" }}
            elevation={10}
          >
            <Box display='flex' justifyContent='space-between'>
              <Box width='300px'>
                <Typography fontWeight='bold' variant='h4' color='primary.main'>
                  Venn Diagram Scopes
                </Typography>
              </Box>
              <SettingsIcon />
            </Box>
            <Box>{/* Venn Diagram area */}</Box>
          </Paper>
          <Box>
            <Box width='350px'>
              <Typography fontWeight='bold' variant='h4' color='primary.main'>
                Problem Statement Generator
              </Typography>
            </Box>
            <Box width='700px'>
              <p>
                Specify first the number of Venn Diagram and Input the scopes of
                your problem statement you want to be generated
              </p>
            </Box>
            <br />
            <Button
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "30px",
                paddingRight: "30px",
                borderRadius: "32px",
                fontWeight: "normal",
              }}
              variant='contained'
            >
              Generate
            </Button>
          </Box>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' paddingTop='64px'>
        <Typography variant='h4' fontWeight='bold' color='primary.main'>
          Generated Problem Statement
        </Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        marginBottom='24px'
        marginTop='24px'
      >
        <Box width='700px'>
          <Typography color='text.main'>
            These are the generated problem statements, you can always edit the
            generated problem statement if you want.
          </Typography>
        </Box>
      </Box>
      {/* Papers */}
      <Box display='flex' justifyContent='center'>
        <Box
          width='70rem'
          paddingLeft='64px'
          paddingRight='64px'
          display='flex'
          justifyContent='center'
          flexDirection='column'
          gap='24px'
        >
          {problemStatements.map((statement, index) => (
            <Paper
              elevation={10}
              key={index}
              sx={{ padding: "16px", borderRadius: "16px" }}
            >
              <Box
                display='flex'
                flexDirection={"row"}
                alignItems={"center"}
                gap='8px'
              >
                <Box>
                  <CircleIcon sx={{ fill: theme.palette.primary.main }} />{" "}
                </Box>
                <Box>{statement}</Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
      <Box padding='32px' display='flex' justifyContent={"right"}>
        <Button
          variant='contained'
          sx={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "30px",
            paddingRight: "30px",
            borderRadius: "32px",
            fontWeight: "normal",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default VennDiagram;
