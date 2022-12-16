import { createStyles, makeStyles } from "@mui/styles";

export default makeStyles(() =>
  createStyles({
    appBar: {
      background: "#FFF",
      color: "#000",
      display: "flex",
      justifyContent: "flex-start",
    },

    appBarInfoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    appBarInfo: {
      display: "flex",
      marginLeft: "20px",

      alignItems: "center",
    },
  })
);
