import React from "react";
import Box from "@mui/material/Box";
import Papers from "../components/Papers";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const VennDiagramList2 = (props) => {
    return (
        <Box>
            <Box paddingLeft="128px" paddingRight="128px">
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                    {props.title}
                </Typography>
            </Box>
            <Box marginLeft="192px" marginRight="192px" marginTop="32px">
                <Papers texts={props.problems} scope={props.scope} />
            </Box>
            <Box
                display="flex"
                justifyContent="right"
                marginTop="32px"
                margintLeft="190px"
                marginRight="190px"
            >
                <Button
                    variant="contained"
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

export default VennDiagramList2;
