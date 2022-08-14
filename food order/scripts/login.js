import { navBar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navBar();

let submit_btn = document.getElementById("submit")
submit_btn.onclick = () =>{
    login()
}

let login = async () =>{
    let user_data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }

    user_data = JSON.stringify(user_data)
    let res = await fetch ("https://masai-api-mocker.herokuapp.com/auth/login",{
        method: "POST",
        body: user_data,
    

        headers: {
            "Content-Type":"application/json",
        },
    })

   let data = await res .json()

   console.log(res)
    console.log(data)
}










