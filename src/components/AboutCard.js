import { Link } from "react-router-dom";
import { Card, Divider, Paper, Typography, Chip } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import IndStatements from "./IndStatements";


const AboutCard = (props) => {
  return (   
    <Paper elevation={10} sx={{ width: .9 }}>
        <Card >         
            <CardMedia 
                component="img"
                height="170"
                image="/IMG_2945.jpg"
                alt="grouppic"
            />
            <CardContent>
            <Typography align="center" sx={{ fontSize:28 }} color="Text.primary" >
                    Who we are
                </Typography>
                
                <Typography align="center" sx={{ fontSize:16, mb:4 }} color="Text.primary" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum modi cum debitis sequi eaque soluta necessitatibus doloremque laborum iste nesciunt accusamus temporibus architecto sunt illo quam, impedit omnis dignissimos dolorum!
                </Typography>
                <Divider> <Chip label="Ask Our Members" /></Divider>
                <IndStatements />
                </CardContent>
        </Card>
    </Paper>
  );
}

export default AboutCard;