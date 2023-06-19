import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const data = [
  {
    id: 1,
    first_name: "Sargent",
    last_name: "Filpi",
    email: "sfilpi0@hhs.gov",
    gender: "Genderqueer",
    ip_address: "50.138.32.21"
  },
  {
    id: 2,
    first_name: "Maddy",
    last_name: "Reglar",
    email: "mreglar1@chronoengine.com",
    gender: "Male",
    ip_address: "26.171.241.206"
  },
  {
    id: 3,
    first_name: "Chris",
    last_name: "Hamlyn",
    email: "chamlyn2@cocolog-nifty.com",
    gender: "Male",
    ip_address: "92.97.14.153"
  },
  {
    id: 4,
    first_name: "Delphine",
    last_name: "Eberz",
    email: "deberz3@slate.com",
    gender: "Female",
    ip_address: "48.251.148.89"
  },
  {
    id: 5,
    first_name: "Benjie",
    last_name: "Legging",
    email: "blegging4@cocolog-nifty.com",
    gender: "Genderqueer",
    ip_address: "147.216.97.62"
  },
  {
    id: 6,
    first_name: "Eldon",
    last_name: "Bidmead",
    email: "ebidmead5@vk.com",
    gender: "Male",
    ip_address: "1.74.67.10"
  },
  {
    id: 7,
    first_name: "Meghann",
    last_name: "Vertey",
    email: "mvertey6@domainmarket.com",
    gender: "Genderqueer",
    ip_address: "178.21.227.239"
  },
  {
    id: 8,
    first_name: "Patrick",
    last_name: "Applegarth",
    email: "papplegarth7@baidu.com",
    gender: "Male",
    ip_address: "133.44.237.99"
  },
  {
    id: 9,
    first_name: "Andee",
    last_name: "Goodspeed",
    email: "agoodspeed8@un.org",
    gender: "Female",
    ip_address: "219.150.103.29"
  },
  {
    id: 10,
    first_name: "Rip",
    last_name: "Pischof",
    email: "rpischof9@homestead.com",
    gender: "Male",
    ip_address: "153.16.102.7"
  }
];

export default function Products() {
  React.useEffect(() => {
    const scrolledY = sessionStorage.getItem(window.location.pathname);
    console.log(scrolledY, "==============");
    window.scroll({ top: scrolledY, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ overflow: "auto" }}>
      {data.map((item) => (
        <Card sx={{ minWidth: 275, margin: 1 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.first_name}
            </Typography>
            <Typography variant="h5" component="div">
              {item.last_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.email}
            </Typography>
            <Typography variant="body2">
              {item.ip_address}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
