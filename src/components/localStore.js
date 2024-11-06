
import toast from "react-hot-toast"
const getAllFavorites = ()=>{
    const all = localStorage.getItem('favorites')
    
    if(all){
        const favorites = JSON.parse(all)
        console.log(favorites)
        return favorites
       
    }else {
        console.log([])
        return []
    }
}

const addFavorite=(product)=>{
    const favorites = getAllFavorites()
   
    console.log(favorites)
    favorites.push(product)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully added!');
}
export{getAllFavorites, addFavorite}