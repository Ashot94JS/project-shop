import React from 'react'
import { Link } from 'react-router-dom'

export  function CategoryItem({
    idCategory,
    strCategory,
    strCategoryDescription,
    strCategoryThumb,

}) {
    
  return (
    <div className='p-2 shadow-2xl text-center'>
        <img src={strCategoryThumb} alt={strCategory} className="w-full"/>
        <h2>{strCategory}</h2>
        <p>{strCategoryDescription.length > 200 ? strCategoryDescription.slice(0 , 200) : strCategoryDescription}</p>
        <Link to={"/category/"+ strCategory} className=' text-orange-400'> Details...{strCategory}</Link>
    </div>
  )
}
