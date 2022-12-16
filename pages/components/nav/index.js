/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, Suspense, Children } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Button,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";

export default function Nav({ item }) {
  let router = useRouter();

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(router.pathname === item.link);
  }, [item]);

  return (
    <Box
      onClick={() => router.push(item.link)}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      key={item.name}
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "10px",
        cursor: "pointer",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          marginLeft: "10px",
          fontWeight: 700,
          color: isShown ? "#8ec038" : "#000000",
          transition: "all 0.2s ease-in",
        }}
      >
        {item.name}
      </Typography>
      <ArrowForwardIosIcon
        sx={{
          fontSize: "12px",
          color: isShown ? "#8ec038" : "#000000",
          marginLeft: "5px",
          transition: "all 0.2s ease-in",
        }}
      />
    </Box>
  );
}
