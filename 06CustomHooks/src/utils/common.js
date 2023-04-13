export const filterData=(searchText,restaurants)=>{
    const filterData= restaurantList.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}