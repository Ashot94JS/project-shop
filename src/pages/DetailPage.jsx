import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMealByID } from "../api";
import { useNavigate } from "react-router-dom";

export  function DetailPage() {
    
    const {id} = useParams();
    const [meal, setMeal] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        getMealByID(id).then(data=>{
            console.log(data.meals[0]);
            setMeal(data.meals[0]);
        })
    },[])




  return (
    <div>
        <button onClick={()=>navigate(-1)}>GO BACK</button>
        <img src={meal.strMealThumb} alt={meal.strArea} />
        <div>{meal.strCategory}</div>
    </div>
  )
}
