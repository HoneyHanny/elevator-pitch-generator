import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import VennDiagram from "./pages/VennDiagram";
import HomePage from "./pages/HomePage";
import Saved from "./pages/Saved";
import List from "./pages/List";
import UserAppbar from "./components/UserAppbar";
import Appbar from "./components/Appbar";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import PageNotFound from "./pages/PageNotFound";

var theme = createTheme({
    typography: {
        fontFamily: '"Lexend Deca", "Lexend", sans-serif',
        button: {
            textTransform: "none",
        },
    },
    palette: {
        background: {
            default: "white",
        },
        primary: {
            main: "#186F65",
        },
        secondary: {
            main: "#C5DCC2",
        },
        text: {
            main: "#071C29",
        },
        stroke: {
            main: "#035082",
        },
        gray: {
            main: "#DADADA",
        },
    },
});

// const entry = createTheme({
//   typography: {
//     fontFamily: '"Lexend Deca", "Lexend", sans-serif',
//     button: {
//       textTransform: 'none',
//     },
//   },
//   palette: {
//     background: {
//       default: '#c5dcc2',
//     },
//     primary: {
//       main: '#186F65',
//     },
//     secondary: {
//       main: '#C5DCC2',
//     },
//     text: {
//       main: '#071C29',
//     },
//     stroke: {
//       main: '#035082',
//     },
//     gray: {
//       main: '#DADADA',
//     },
//   },
// });

// createContext(entry);

// https://stackoverflow.com/questions/61600091/react-router-and-material-ui-applying-custom-themes-depending-on-route
function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/user" element={<UserAppbar />}>
                        <Route path="saved" element={<Saved />} />
                        <Route path="home" element={<HomePage />} />
                        <Route path="list" element={<List />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                    <Route path="/user2" element={<Appbar />}>
                        <Route path="venndiagram" element={<VennDiagram />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
