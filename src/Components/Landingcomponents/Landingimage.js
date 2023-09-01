import image from "../../images/background.png";
import { Box } from "@mui/material";
import styles from "../css/Landingimage.module.css"

const Landingimage =()=>{
    return(
        <Box className={styles.landingimagebox} sx={{backgroundColor: "secondary.main"}}>
            <img className={styles.landingimage} src={image} loading="lazy" alt=""/>
        </Box>
    )
}
export {Landingimage}