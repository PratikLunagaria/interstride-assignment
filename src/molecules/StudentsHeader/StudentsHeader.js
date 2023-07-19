import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";

const StudentsHeader = ({ tabElements }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value, "value");
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
      sx={{ width: "100%" }}
      centered
    >
      {tabElements.map((tabElement, index) => (
        <Tab
          label={
            <React.Fragment>
              <img
                src={tabElement.image}
                alt={tabElement.title}
                style={
                  value === index
                    ? {
                        filter:
                          "invert(15%) sepia(41%) saturate(4459%) hue-rotate(321deg) brightness(91%) contrast(92%)",
                      }
                    : {
                        filter:
                          "invert(0%) sepia(1%) saturate(7473%) hue-rotate(343deg) brightness(108%) contrast(100%)",
                      }
                }
              />
              <Typography>{tabElement.title}</Typography>
            </React.Fragment>
          }
        />
      ))}
    </Tabs>
  );
};

export default StudentsHeader;
