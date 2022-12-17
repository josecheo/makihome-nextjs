import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    wrapperImg: {
      marginTop: "145px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        marginTop: "80px",
      },
    },
    groupButtons: {
      zIndex: "6000",
      width: "100%",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "calc(100vh - 250px)",
      alignItems: "flex-end",
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
      },
    },
    button: {
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "12px",
      textTransform: "none",
      height: "48px",
      borderRadius: "24px",
      width: "183px",
      marginLeft: "10px",
      marginRight: "10px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "10px",
      },
    },
    wrapperSlides: {
      height: "calc(100vh - 145px)",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "calc(100vh - 80px)",
      },
    },
  })
);
