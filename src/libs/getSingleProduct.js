export default async function getSingleProduct (id) {

    const response = await fetch(`https://bazar-zone-server.vercel.app/products/${id}`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return response.json();

}