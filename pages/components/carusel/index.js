import React from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";
//Material UI
import { Box, Button } from "@mui/material";

// eslint-disable-next-line complexity
export default function CaruselImage({ images, onChange, imgNumber }) {
  const slides = images.map((image, index) => (
    <Box
      key={index}
      sx={{
        height: "calc(100vh - 145px)",
        position: "relative",
      }}
    >
      <Image
        src={image.thumbnail}
        alt="product"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  ));

  return (
    <Box
      sx={{
        marginTop: "145px",
        position: "relative",
      }}
    >
      <Box sx={{ zIndex: "6000", position: "absolute", bottom:"15%", left:"40%", right:"35%" }}>
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
          Realizar Pedido
        </Button>

        <Button
          variant="contained"
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
            marginLeft:"20px"
          }}
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
