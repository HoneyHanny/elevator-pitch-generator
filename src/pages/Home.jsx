import { Grid } from "@mui/material";
import React from "react";

const Home = () => {
    return (
        <>
            <Grid container sx={{ userSelect: "none" }}>
                <Grid>
                    <h1>ElevateMe</h1>
                </Grid>
                <Grid>Home</Grid>
            </Grid>
            <Grid></Grid>
        </>
    );
};

export default Home;
