
export async function getChartsData(){
    const res= await fetch(process.env.URL +'/api/charts', {
        cache:'no-store'
    });
    return res.json()
}

export async function getUsersData(){
    const res= await fetch(process.env.URL +'/api/users', {
        cache:'no-store'
    });
    return res.json()
}

export async function getProductsData(){
    const res= await fetch(process.env.URL +'/api/products', {
        cache:'no-store'
    });
    return res.json()
}




