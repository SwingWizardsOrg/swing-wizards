import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import styles from "../css/Card.module.css";
import { Link } from "react-router-dom";
const ProductCard =({Productname})=>{
  return (
    <Link to="/signup">
    <Card className={styles.main} sx={{}}>
      <CardActionArea>
        <div  className={styles.content} >
           <div className={styles.productname} >{Productname}</div>
        </div>
      </CardActionArea>
      
    </Card>
    </Link>
  );
}
export {ProductCard};