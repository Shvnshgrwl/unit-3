document.querySelector("#ss").addEventListener("click",search)
var arr = JSON.parse(localStorage.getItem(arr))||[]
function search(){
  
  var input= document.getElementById("search").value

   let url =`https://www.omdbapi.com/?s=${input}&page=1&apikey=642d9cdf`
   fetch(url)
   .then(function(res){
       return res.json()
   })
   .then(function(res){
      append(res.Search)
      
    
   })
   .catch(function(error){
       console.log(error)
   })
}

let url = "https://www.omdbapi.com/?apikey=642d9cdf=thor"

let getData = async () =>{
  let input = document.getElementById("search").value;
  let url = `https://www.omdbapi.com/?s=${input}&page=1&apikey=642d9cdf`

  let res = await fetch(url)
  let data = await res.json()
  console.log(data)
}

let id;
 let debounce = (delay,func) =>{
  if(id){
    clearTimeout(id)
  }
  id = setTimeout(()=>{
    func()
  },delay)
 }

function append(data){
window.location.href= "show.html"
  localStorage.setItem("arr",JSON.stringify(data))
  
  console.log(arr)

}