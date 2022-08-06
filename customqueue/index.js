class Stack {
    constructor(){
        this.length = 0
        this.stack = []
    }
    push(el){
        this.stack.push(el)
        this.length++
    }
    pop(){
        this.stack.pop()
        this.length--
    }

}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.pop(1)
console.log(stack)