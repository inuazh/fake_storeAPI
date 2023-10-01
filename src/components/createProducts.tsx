import { useState } from "react"

export function CreateProduct(){

    const [value, setValue] = useState('')

    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault()
    }


    return(
        <form action="" onSubmit={submitHandler}>

            <input type="text"
            className="border py-2 px-4 mb-2"
            placeholder="Enter product title..."
            value={value}
            onChange={event => setValue(event.target.value)}

             />

             <button
             className="py-2 px-4 border bg-yellow-400 "
             >create</button>
        </form>
    )
}