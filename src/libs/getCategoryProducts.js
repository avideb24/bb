export default async function getCategoryProducts (category) {

    const response = await fetch(`https://bazar-zone-server.vercel.app/products/category/${category}`);

    return response.json();

}