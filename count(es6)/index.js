class Counter{
    #value;
    constructor(init){
        this.#value = init
    }
    get value(){
        return this.#value
    }
    set value(newValue){
        this.#value = newValue
    }
}
let counter = new Counter(0)

window.addEventListener("load",() =>{
    const value = document.getElementById("value")
    value.textContent = counter.value

    const btn = document.getElementById("add-btn")
    btn.addEventListener("click",() =>{
        counter.value++
        value.textContent = counter.value
    })

    const btn2 = document.getElementById("sub-btn")
    btn2.addEventListener("click",() =>{
        counter.value--;
        value.textContent = counter.value
    })
})