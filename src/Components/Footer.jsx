import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="6"
        bgcolor="#44A9C0"
        color="text"
        padding="10px"
        textAlign="center"
        mt={10}
        p={3}
        sx={{ textAlign: "center", cursor: "pointer" }}
      >
        طراحی شده با عشق 🤍 | توسط علی اسماعیلی
      </Typography>
    </footer>
  );
};

export default Footer;
