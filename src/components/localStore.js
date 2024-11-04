

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
    // const isExist = favorites.find(item => item.id == product.id)
    // if(isExist) return 
    console.log(favorites)
    favorites.push(product)
    localStorage.setItem('favorites', JSON.stringify(favorites))

}
export{getAllFavorites, addFavorite}