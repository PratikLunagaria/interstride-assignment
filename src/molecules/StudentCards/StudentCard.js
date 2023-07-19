import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import EllipsisWrapper from "../../atoms/EllipsisWrapper";

export default function StudentCard(props) {
  const {
    user_profile,
    user_bio,
    major,
    country_image,
    country_of_origin,
    graduation_year,
    full_name,
  } = props.data;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div>
          <Avatar
            sx={{ bgcolor: red[500], height: "4.5rem", width: "4.5rem" }}
            aria-label="recipe"
            src={user_profile}
          />
          <div>
            <Typography>{full_name}</Typography>
            <Typography>
              {major}, {graduation_year}
            </Typography>
            <div style={{ display: "flex" }}>
              <img
                src={country_image}
                alt={country_of_origin}
                style={{
                  width: "1.5rem",
                  height: "1rem",
                  borderRadius: "0.1rem",
                }}
              />
              <Typography> From {country_of_origin}</Typography>
            </div>
          </div>
        </div>
      </CardContent>
      {user_bio && (
        <CardContent>
          <EllipsisWrapper>{user_bio}</EllipsisWrapper>
        </CardContent>
      )}
    </Card>
  );
}
