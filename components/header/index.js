/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import { Children } from "react";
import {
  Box,
  AppBar,
  Typography,
  Button,
} from "@mui/material";
import Nav from "../nav";
import RoomIcon from "@mui/icons-material/Room";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoSushiTeam from "../../public/assets/LogoSushiTeam.svg";
import Image from "next/image";

import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();

  const nav = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "Contacto",
      link: "/contacto",
    },
    {
      name: "Ofertas",
      link: "/ofertas",
    },
  ];

  return (
    <Box>
      <AppBar className={classes.appBar} position="fixed" elevation={0}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 40px",
            height: "45px",
            borderBottom: "1px solid #cbcbcb",
          }}
        >
          <Box className={classes.appBarInfoContainer}>
            <Box className={classes.appBarInfo}>
              <RoomIcon sx={{ fontSize: "24px", color: "#8ec038" }} />
              <Typography
                sx={{ fontSize: "12px", marginLeft: "10px", fontWeight: 500 }}
              >
                AV. tantamayo Mz D, SMP - Lima
              </Typography>
            </Box>
            <Box className={classes.appBarInfo}>
              <WhatsAppIcon sx={{ fontSize: "24px", color: "#8ec038" }} />
              <Typography
                sx={{ fontSize: "12px", marginLeft: "10px", fontWeight: 500 }}
              >
                +51 918 103 451
              </Typography>
            </Box>
            <Box className={classes.appBarInfo}>
              <MailOutlineIcon sx={{ fontSize: "24px", color: "#8ec038" }} />
              <Typography
                sx={{ fontSize: "12px", marginLeft: "10px", fontWeight: 500 }}
              >
                makyhomesushi@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box className={classes.appBarInfoContainerRigth}>
            <LocationOnIcon sx={{ fontSize: "32px", color: "#000000" }} />
            <PersonIcon sx={{ fontSize: "32px", color: "#000000" }} />
            <ShoppingBagIcon sx={{ fontSize: "32px", color: "#000000" }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 70px",
            height: "100px",
          }}
        >
          <Image
            src={LogoSushiTeam}
            width="134"
            // height="44"
            className="footerLanding-nav__logo"
            quality={100}
          />
          <Box sx={{   display:"flex"}}>
            {Children.toArray(nav.map((element) => <Nav item={element} />))}
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {}}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "12px",
              textTransform: "none",
              height: "48px",
              borderRadius: "24px",
              width: "183px",
            }}
          >
            Ver Carta
          </Button>
        </Box>
      </AppBar>
    </Box>
  );
}
