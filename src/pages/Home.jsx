import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CheckCircle from "@mui/icons-material/CheckCircle";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import axios from "axios";

// NOTE(hans): Subject for change (Not final)

// The layout
/*
  +--------------------------------------------------------+
  |                     App bar                            |
  |                                                        |
  +--------------------------------------------------------+
  |                                                        |
  |  Left div                       Right div              |
  |  +------------------------+     +--------------------+ |
  |  | Problem Statement      |     |                    | |
  |  | Generator              |     |                    | |
  |  |                        |     |                    | |
  |  |                        |     |     Diagram        | |
  |  |                        |     |                    | |
  |  |                        |     |                    | |
  |  | Generate               |     |                    | |
  |  +------------------------+     +--------------------+ |
  |                     Problem Statement                  |
  +--------------------------------------------------------+
  |    Problem                                             |
  |    [] Inneficient waste collection                     |
  |    [] Limited availability of recycled products        |
  |    [] Limited access to recycling                      |
  |                                                        |
  +--------------------------------------------------------+
*/
const Home = () => {
	var theme = useTheme();
	const problemStatements = [
		"Inneficient waste collection",
		"Limited availability",
		"Limited access to recycling",
		"Accumulation of waste",
		"Resource depletion",
	];

	return (
		<>
			<Box
				sx={{
					paddingTop: "3rem",
					paddingBottom: "3rem",
					paddingLeft: "8rem",
					paddingRight: "8rem",
					userSelect: "none",
				}}>
				{/* The div that holds the two div side by side */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					{/* left div */}
					<Box>
						<h1 style={{ color: theme.palette.primary.main }}>
							Problem Statement
							<br />
							Generator
						</h1>

						<Box paddingTop={10} paddingBottom={15}>
							<p>
								Specify first the number of Venn Diagram and
								<br />
								input the scopes of your problem statement
								<br />
								you want to be generated
							</p>
						</Box>
						<form>
							<Button
								type="submit"
								variant="contained"
								sx={{
									paddingTop: "10px",
									paddingBottom: "10px",
									paddingLeft: "30px",
									paddingRight: "30px",
									borderRadius: "32px",
									fontWeight: "normal",
								}}>
								Generate
							</Button>
						</form>
					</Box>
					{/* right div */}
					<Box>
						{/* TODO(hans): Add actual venn diagram */}
						<h1 style={{ color: theme.palette.primary.main }}>Venn Diagram</h1>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					userSelect: "none",
					textAlign: "center",
				}}>
				<h1 style={{ color: theme.palette.primary.main }}>Problem Statement</h1>
			</Box>
			<Box
				sx={{
					userSelect: "none",
					backgroundColor: "gray.main",
					paddingTop: "3rem",
					paddingBottom: "3rem",
					paddingLeft: "10rem",
					paddingRight: "10rem",
				}}>
				<bold
					style={{ fontWeight: "bold", color: "black", fontSize: "1.2rem" }}>
					Problem
				</bold>
				{/* NOTE(hans): Use array.map later */}
				<FormGroup>
					{problemStatements.map((problemStatement, index) => (
						<FormControlLabel
							key={index}
							control={
								<Checkbox
									defaultChecked
									icon={
										<CheckCircleOutlined
											sx={{ fill: theme.palette.primary.main }}
										/>
									}
									checkedIcon={<CheckCircle />}
								/>
							}
							label={problemStatement}
						/>
					))}
				</FormGroup>
			</Box>
		</>
	);
};

export default Home;
