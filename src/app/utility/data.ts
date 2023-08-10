
export async function getChartsData(){
    const res= await fetch('new-dashborad.vercel.app/api/charts', {
        cache:'no-store'
    });
    return res.json()
}

export async function getUsersData(){
    const res= await fetch('new-dashborad.vercel.app/api/users', {
        cache:'no-store'
    });
    return res.json()
}

export async function getProductsData(){
    const res= await fetch('new-dashborad.vercel.app/api/products', {
        cache:'no-store'
    });
    return res.json()
}




