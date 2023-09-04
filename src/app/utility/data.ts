
export async function getChartsData(){
    const res= await fetch('http://localhost:3000/api/charts',{cache:"no-store"});
    return res.json()
}

export async function getUsersData(){
    const res= await fetch('http://localhost:3000/api/users',{cache:"no-store"});
    return res.json()
}

export async function getProductsData(){
    const res= await fetch('http://localhost:3000/api/products',{cache:"no-store"});
    return res.json()
}

export async function getUserById(id:string){
    const res= await fetch(`http://localhost:3000/api/users/${id}`,{cache:"no-store"});
    return res.json()
}

export async function getProductById(id:string){
    const res= await fetch(`http://localhost:3000/api/products/${id}`,{cache:"no-store"});
    return res.json()
}




