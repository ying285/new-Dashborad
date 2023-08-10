
export async function getChartsData(){
    const res= await fetch('http://127.0.0.1:8000/api/charts', {
        cache:'no-store'
    });
    return res.json()
}

export async function getUsersData(){
    const res= await fetch('http://127.0.0.1:8000/api/users', {
        cache:'no-store'
    });
    return res.json()
}

export async function getProductsData(){
    const res= await fetch('http://127.0.0.1:8000/api/products', {
        cache:'no-store'
    });
    return res.json()
}




