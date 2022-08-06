class Todo {
    #todos;
    constructor(){
        this.#todos = []
    }
    get items(){
        return this.#todos
    }
    set items(title){
        const newItem = {
            id:Date.now(),
            title: title,
            status: false,
        }
        this.#todos = [...this.#todos,newItem]
    }
    toggleStatus(id){

        this.#todos = this.#todos.map((el)=>
            el.id === id ? {...el,status: !el.status} :el
        )
    }

    deleteItem (id){
        this.#todos = this.#todos.filter((el)=> el.id !== id)
    }
}

const list = new Todo()

window.addEventListener("load",() =>{
    const addBtn = document.getElementById("add-btn")

    addBtn.onclick = () =>{
        const text = document.getElementById("input").value;
        list.items = text;
        renderDon()
    }

})

function TodoItem({id,title,status}) {
    const div = document.createElement("div")
    const li = document.createElement("li")
    li.innerHTML = `${title} - ${status}`

    //delete button
    const btn = document.createElement("button")
    btn.textContent = "Toggle"
    btn.onclick = () => {
        list.toggleStatus(id)
        renderDon()
    }
    const del = document.createElement("button")
    del.textContent = "Delete"
    del.onclick = () =>{
        list.deleteItem(id)
        renderDon()
    }

    div.append(li ,btn,del)
    return div
}

let renderDon = () =>{
    let container = document.getElementById("container")
    container.innerHTML = null

    list.items.forEach((el) =>{
        let newItem = TodoItem(el)
        container.append(newItem)
    })
}


