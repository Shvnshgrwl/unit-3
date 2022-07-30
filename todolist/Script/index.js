document.querySelector("#form").addEventListener("submit",storeData)
var todoData=JSON.parse(localStorage.getItem("todoDataBase")) || []

function storeData(){
    event.preventDefault()
    var obj={name:document.querySelector("#name").value,
            qty:document.querySelector("#qty").value,
            pro:document.querySelector("#priority").value
    }
    todoData.push(obj)
    localStorage.setItem("todoDataBase",JSON.stringify(todoData))
    
    console.log(todoData);
} 