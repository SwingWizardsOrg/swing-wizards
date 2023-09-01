import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import styles from "../css/Card.module.css";

const ProductCard =({Productname})=>{
  return (
    <Card className={styles.main} sx={{}}>
      <CardActionArea className={styles.Productcardcontent} >
        <CardContent >
           <div className={styles.Productcard_div} >{Productname}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export {ProductCard};