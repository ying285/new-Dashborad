
export async function getChartsData(){
    const res= await fetch(process.env.URL+'/api/charts');
    return res.json()
}

export async function getUsersData(){
    const res= await fetch(process.env.URL+'/api/users');
    return res.json()
}

export async function getProductsData(){
    const res= await fetch(process.env.URL+'/api/products');
    return res.json()
}




