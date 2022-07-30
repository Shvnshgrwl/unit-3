// let user = {
//     name:"Pable",
//     email: "pablo@gmail.com"
// }
// let user2 = {
//     name: "Pablo brother",
//     email: "pablo-2@gmail.com"
// }

// Inventory system
// Input data in the form
// Data will be stored in the localstorage
// Fetch this data and append to the DOM

function Product (name,price,image) {

    this.name = name;
    this.price = price;
    this.image = image;

 
}

let submit = () =>{
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    

    let p = new Product(name,price,image)

    let data = JSON.parse(localStorage.getItem("data")) || []

    // if(data){
    //     data.push(p)
    // }
    // else{
    //     data = []
    //     data.push(p)
    // }
    data.push(p)
    localStorage.setItem("data",JSON.stringify(data))
    console.log(p)

}




    
