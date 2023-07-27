import { useState } from "react"

const Count = () => {
    const [ count, setCount ] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    console.log(`The count is ${count}`)


    return (
        <div>
            <button onClick={handleCount}>Count + 1</button>
            <h1 style={{color: "red"}}>{count}</h1>
        </div>
    )
}

export default Count