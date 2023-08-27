import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import styles from "../css/Card.module.css";


const ProductCard =({Productname})=>{
  return (
    <Card sx={{mt:60, ml:3}}>
      <CardActionArea>
        <CardContent className={styles.Productcardcontent}>
           <div className={styles.Productcard_div}>{Productname}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ProductCard;