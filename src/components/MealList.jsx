import React from 'react'
import { MelaItem } from './MelaItem'
import { useNavigate } from 'react-router-dom'

export  function MealList({meals}) {

    const navigate = useNavigate();

  return (
    <div className=' grid sm:grid-cols-2 lg:grid-cols-4  '>
        {
          meals.map(el=> <MelaItem key={el.idMeal} {...el}/>)
        }
    </div>
  )
}
