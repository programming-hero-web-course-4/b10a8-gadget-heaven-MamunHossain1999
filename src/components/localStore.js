
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

const getAllWishlist = ()=>{
    const all = localStorage.getItem('wishlist')
    
    if(all){
        const wishlist = JSON.parse(all)
        console.log(wishlist)
        return wishlist
       
    }else {
        console.log([])
        return []
    }
}
const addWishlist=(item)=>{
    const wishlist = getAllWishlist()
    console.log(wishlist)
    
    console.log(item)
    wishlist.push(item)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    toast.success('Successfully added!');
}

export{getAllFavorites, addFavorite, addWishlist, getAllWishlist}