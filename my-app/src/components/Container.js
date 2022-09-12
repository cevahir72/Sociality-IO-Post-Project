import React from 'react';
import MyCard from "./MyCard";
import { styled } from '@mui/material/styles';


 

const Container = ({item}) => {



  return (
    <div>

      <MyCard item={item} entry={item.entry}/>
    </div>
  )
}

export default Container