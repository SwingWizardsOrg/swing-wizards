import { Box } from "@mui/material";
import {ProductCard} from "../Cards/Productcard"
import styles from "../css/Cardcontainer.module.css"

const Productcardcontainers =()=>{
    return(
        <Box className={styles.container} sx={{backgroundColor: "secondary.main"}}>
            <ProductCard Productname="Hooli"/>
        <ProductCard Productname="TradeShare"/>
        <ProductCard Productname="SwingTrader"/>
        </Box>
    )
}
export {Productcardcontainers}