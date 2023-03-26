import {useState, useEffect} from 'react';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

export  function CategoryPage() {

    const [meals,setMelas] = useState([]);
    const {name} = useParams();
    const navigate = useNavigate();


    useEffect(()=>{
        getFilteredCategory(name).then(data=>{
            console.log(data.meals);
            setMelas(data.meals)
        })
    },[])


  return (
    <div className=" container mx-auto p-2">
        <button onClick={()=>navigate(-1)}>GO BACK</button>
        <MealList meals={meals}/>
    </div>
  )
}

