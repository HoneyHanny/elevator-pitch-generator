import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import VennDiagramList2 from "../components/VennDiagramList2";
import Footer from "../components/Footer";

const SavedList = () => {
    const tests = ["test1", "test2", "test3"];
    return (
        <Box sx={{ userSelect: "none" }}>
            <Box display="flex" justifyContent="center">
                <Typography variant="h2" fontWeight="bold" color="primary.main">
                    Saved List
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" marginBottom="64px">
                <Box width="50%" paddingTop="32px">
                    <Typography color="text.main">
                        This page stores all the problem statements that you
                        want to save. You Can edit with the show button. the
                        section is divided in to two categories. 2 Venn Diagram
                        List and the 3 Venn Diagram List
                    </Typography>
                </Box>
            </Box>
            <VennDiagramList2
                title={"2 Venn Diagram List"}
                problems={tests}
                scope
            />
            <VennDiagramList2 title={"3 Venn Diagram List"} problems={tests} />
            <Box marginTop="64px">
                <Footer />
            </Box>
        </Box>
    );
};

export default SavedList;
