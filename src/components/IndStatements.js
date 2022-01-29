import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";

const IndStatements = (props) => {
  return (
      <>
    <div className='IndCont'>
        <div className="indImg">
        <CardMedia
            sx={{ width: .8, boxShadow: 3}}
                component="img"
                height="60"
                image="https://qph.fs.quoracdn.net/main-qimg-f521020f4e9761f812d1dd8e1de32ebb-c"
                alt="grouppic"
            />
        </div>
        <CardContent sx={{ width:.50, pr: 0 }}>
        <Typography>
            "YO YO YO I LOVE THIS PLACE"
        </Typography>
        </CardContent>
    </div>
    <div className='IndCont'>
        <div className="indImg">
        <CardMedia
            sx={{ width: .8, boxShadow: 3}}
                component="img"
                height="60"
                image="https://www.famefocus.com/wp-content/uploads/2017/11/harrison-ford-1000x600.jpg"
                alt="grouppic"
            />
        </div>
        <CardContent sx={{ width:.50, pr: 0 }}>
        <Typography>
            "Man, oh man! This is the spot!""
        </Typography>
        </CardContent>
    </div>
    </>
    
  );
}

export default IndStatements;