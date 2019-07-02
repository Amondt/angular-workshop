export class Todo {
    id: number
    content: string
    date: Date
    checked: boolean
    
    constructor (
        content: string,
        date: Date
    ) {
        this.content = content
        this.date = date
        this.id = Date.now() + Math.ceil(Math.random() * 1000000)
        this.checked = false
    }
}