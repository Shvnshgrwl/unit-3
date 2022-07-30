var todoItem=JSON.parse(localStorage.getItem("todoDataBase"))

//console.log(todoItem);
var completed=JSON.parse(localStorage.getItem("comp")) || []


todoItem.map(function(el){
    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.textContent=el.name
    var td2=document.createElement("td")
    td2.textContent=el.qty
    var td3=document.createElement("td")
    td3.textContent=el.pro
    var td4=document.createElement("td")
    var btn=document.createElement("button")
    btn.textContent="Mark As Complete"
    btn.addEventListener("click",function(){
        markcomp(el)
    })
    td4.append(btn)

    tr.append(td1,td2,td3,td4)
    document.querySelector("#body").append(tr)
})

function markcomp(el){
    console.log(el)
    completed.push(el)
    console.log(completed);
    localStorage.setItem("comp",JSON.stringify(completed))
}