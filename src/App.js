import { Container, Grid, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import StudentCard from "./molecules/StudentCards/StudentCard";
import CardGrid from "./organisms/CardGrid/CardGrid";
import { userData } from "./static/mock/data";
import StudentsHeader from "./molecules/StudentsHeader/StudentsHeader";
import CommunityImage from "./static/assets/img/Community.svg";
import StudentsImage from "./static/assets/img/Students.svg";
import StaffImage from "./static/assets/img/Staff.svg";
import MessagesImage from "./static/assets/img/Messages.svg";
import ResourcesImage from "./static/assets/img/Resources.svg";
import Banner from "./molecules/Banner/Banner";
import FilterCriteria from "./molecules/FilterCriteria/FilterCriteria";

const tabElements = [
  {
    image: StudentsImage,
    title: "Students",
  },
  {
    image: StaffImage,
    title: "Staff",
  },
  {
    image: CommunityImage,
    title: "Community",
  },
  {
    image: MessagesImage,
    title: "Messages",
  },
  {
    image: ResourcesImage,
    title: "Resources",
  },
];

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#8c1d41",
    },
  },
  typography: {
    fontFamily: ["TTCommons-Regular"].join(","),
    button: {
      textTransform: "none",
    },
    color: "#000c3d",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <StudentsHeader tabElements={tabElements} />
        <Banner />
        <FilterCriteria />
        <CardGrid>
          {userData.map((data) => (
            <Grid item xs={2} sm={4} md={4} key={data.id}>
              <StudentCard data={data} />
            </Grid>
          ))}
        </CardGrid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
