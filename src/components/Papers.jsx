import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

const Papers = (props) => {
    return (
        <FormGroup>
            <Box display="flex" flexDirection="column" gap="24px">
                {props.texts.map((text, index) =>
                    props.scope ? (
                        <Box
                            key={index}
                            display="flex"
                            gap="32px"
                            alignItems="center"
                        >
                            <Paper
                                sx={{
                                    boxShadow: "paperShadow.softShadow",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "16px",
                                    color: "grayText.main",
                                    borderRadius: "16px",
                                }}
                            >
                                <Box>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                defaultChecked
                                                icon={
                                                    <RadioButtonUncheckedOutlinedIcon
                                                        sx={{
                                                            color: "primary.main",
                                                        }}
                                                    />
                                                }
                                                checkedIcon={
                                                    <RadioButtonCheckedOutlinedIcon
                                                        sx={{
                                                            color: "primary.main",
                                                        }}
                                                    />
                                                }
                                            />
                                        }
                                        label={text}
                                    />
                                </Box>{" "}
                                <Box color="primary.main">Scopes</Box>
                            </Paper>
                            <Box>
                                <DeleteOutlinedIcon
                                    sx={{ color: "delete.main" }}
                                />
                            </Box>
                        </Box>
                    ) : (
                        <Box key={index}>
                            <Paper
                                sx={{
                                    boxShadow: "paperShadow.softShadow",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "16px",
                                    color: "grayText.main",
                                    borderRadius: "16px",
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            defaultChecked
                                            icon={
                                                <RadioButtonUncheckedOutlinedIcon
                                                    sx={{
                                                        color: "primary.main",
                                                    }}
                                                />
                                            }
                                            checkedIcon={
                                                <RadioButtonCheckedOutlinedIcon
                                                    sx={{
                                                        color: "primary.main",
                                                    }}
                                                />
                                            }
                                        />
                                    }
                                    label={text}
                                />
                                <DeleteOutlinedIcon
                                    sx={{ color: "delete.main" }}
                                />
                            </Paper>
                        </Box>
                    )
                )}
            </Box>
        </FormGroup>
    );
};

export default Papers;
