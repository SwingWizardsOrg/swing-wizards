import CustomPopup from "./CustomPopup";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Errordisplay from "../../../images/errordisplay.gif";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

export default function Popup({
  SwingSubmission,
  RetrySwingSubmission,
  Errorstate,
}) {
  console.log(SwingSubmission);
  return (
    <div>
      <CustomPopup show={true}>
        {Errorstate === true ? (
          <Card sx={{ width: 272, height: 300, backgroundColor: "#141414" }}>
            <CardMedia sx={{ height: 110, width: 275 }} image={Errordisplay} />
            <CardContent sx={{ mt: 3 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" color="error">
                <h4>{SwingSubmission.SwingError}</h4>
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: 3 }}>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={RetrySwingSubmission}
              >
                Retry
              </Button>
            </CardActions>
          </Card>
        ) : (
          <Card sx={{ width: 272, height: 300, backgroundColor: "#141414" }}>
            <CardMedia sx={{ height: 110, width: 275 }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <CircularProgress sx={{ ml: 12 }} />
              </Typography>
              <Typography variant="body2" color="error"></Typography>
            </CardContent>
          </Card>
        )}
      </CustomPopup>
    </div>
  );
}
