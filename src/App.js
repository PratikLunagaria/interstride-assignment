import { Grid } from "@mui/material";
import "./App.css";
import StudentCard from "./molecules/StudentCards/StudentCard";
import CardGrid from "./organisms/CardGrid/CardGrid";
import { userData } from "./static/mock/data";

function App() {
  // useEffect(()=>{
  //   const APIres = fetch("https://web.testing.interstride.com/api/v1/admission_portal/students?&user_type=Student", {
  //     "headers": {
  //       "accept": "application/json, text/plain, */*",
  //       "accept-language": "en-US,en;q=0.9",
  //       "if-none-match": "W/\"841ac69a3eba50ce64e2ce479acb001a\"",
  //       "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
  //       "sec-ch-ua-mobile": "?0",
  //       "sec-ch-ua-platform": "\"Windows\"",
  //       "sec-fetch-dest": "empty",
  //       "sec-fetch-mode": "cors",
  //       "sec-fetch-site": "cross-site",
  //       "token": "GjlxunlpmjneBGrodv96Eg"
  //     },
  //     "referrer": "https://admissions-feat-admission-131-admissions-widget.vercel.app/",
  //     "referrerPolicy": "strict-origin-when-cross-origin",
  //     "body": null,
  //     "method": "GET",
  //     "mode": "cors",
  //     "credentials": "omit"
  //   });
  //   console.log(APIres)
  // },[])
  return (
    <div className="App">
      <CardGrid>
        {userData.map((data) => (
          <Grid item xs={2} sm={4} md={4} key={data.id}>
            <StudentCard data={data} />
          </Grid>
        ))}
      </CardGrid>
    </div>
  );
}

export default App;
