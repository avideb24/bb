import Swal from "sweetalert2";

export default async function getProducts () {

    try{
        const response = await fetch('https://bazar-zone-server.vercel.app/products');

        if(!response.ok){
            Swal.fire({
                title: "Failed To Load!",
                icon: "error",
            });
        }

        return response.json();
    }
    catch{
        Swal.fire({
            title: "Failed To Load!",
            icon: "error",
        });
    }

}