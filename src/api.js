

const getAllCategories = async () =>{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    return response.json();
}

const getFilteredCategory = async (name) =>{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + name);
    return response.json();
}

const getMealByID = async (id) =>{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    return response.json();
}

export {getAllCategories, getMealByID, getFilteredCategory}