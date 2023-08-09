
export async function getChartsData(){
    const res= await fetch('/api/charts', {
        cache:'no-store'
    });
    return res.json()
}

export async function getUsersData(){
    const res= await fetch('/api/users', {
        cache:'no-store'
    });
    return res.json()
}

export async function getProductsData(){
    const res= await fetch('/api/products', {
        cache:'no-store'
    });
    return res.json()
}




