import React from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import useStyles from "./styles";

export default function CaruselImage({ images, imgNumber }) {
  const classes = useStyles();

  const slides = images?.map((image, index) => (
    <Box
      key={index}
      className={classes.wrapperSlides}
    >
      <Image
        src={image?.thumbnail}
        alt="product"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  ));

  return (
    <Box className={classes.wrapperImg}>
      <Box className={classes.groupButtons}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {}}
          sx={{}}
        >
          Realizar Pedido
        </Button>

        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {}}
        >
          Combos del dia
        </Button>
      </Box>
      <Carousel
        cellAlign={"left"}
        slideIndex={imgNumber}
        slidesToScroll={1}
        slidesToShow={1}
        transitionMode={"scroll"}
        wrapAround
        defaultControlsConfig={{
          nextButtonText: ">",
          nextButtonStyle: {
            background: "transparent",
            fontSize: "80px",
            color: "#FFF",
          },
          prevButtonText: "<",
          prevButtonStyle: {
            background: "transparent",
            fontSize: "80px",
            color: "#FFF",
          },
        }}
      >
        {slides}
      </Carousel>
    </Box>
  );
}
