import { useState, useEffect } from "react";
import {getAllCategories} from '../api';
import { CategoryList } from "../components/CategoryList";


export function HomePage() {

  const [categories, setCategories]= useState([]);
  

  useEffect(()=>{
     getAllCategories().then(data=>{
      console.log(data.categories);
      setCategories(data.categories)
     })
  },[])

  return (
    <div className=" container mx-auto p-2">
      <CategoryList categories={categories} />
    </div>
  )
}
