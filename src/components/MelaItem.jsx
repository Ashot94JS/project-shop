import {useNavigate} from 'react-router-dom'


export  function MelaItem({
    idMeal,
    strMeal,
    strMealThumb

}) {

    const navigate = useNavigate();
    
  return (
    <div className='p-2 shadow-2xl text-center cursor-pointer' onClick={()=>navigate("/meal/" + idMeal)}>
        <img src={strMealThumb} alt={strMeal} className="w-full" />
        <h2 className=' text-orange-400'>{strMeal}</h2>
    </div>
  )
}
