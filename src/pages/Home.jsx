import { useState } from "react"
import Button from "../components/Button"

const Home = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="title">Home</h1>
            <p className="content">Current count: {count}</p>
            
            <Button label={"Increment"} onClickFunction={() => setCount(prevState => prevState + 1)}/>
            {/* <button className="boton" onClick={setCount(prevState => prevState+1)}>Increment</button> */}
        </>
    )
}
export default Home;