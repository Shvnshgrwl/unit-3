var completedToDo=JSON.parse(localStorage.getItem("comp"))
var incompleted=JSON.parse(localStorage.getItem("finaldata")) || []



console.log(completedToDo)

completedToDo.map(function(el){
    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.textContent=el.name
    var td2=document.createElement("td")
    td2.textContent=el.qty
    var td3=document.createElement("td")
    td3.textContent=el.pro
    tr.append(td1,td2,td3)
    document.querySelector("#body").append(tr)
    localStorage.setItem("finalData",JSON.stringify(incompleted))
})