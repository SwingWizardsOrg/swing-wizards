import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import styles from "../css/Card.module.css";

const ProductCard =({Productname})=>{
  return (
    <Card className={styles.main} sx={{}}>
      <CardActionArea>
        <div  className={styles.content} >
           <div className={styles.productname} >{Productname}</div>
        </div>
      </CardActionArea>
    </Card>
  );
}
export {ProductCard};