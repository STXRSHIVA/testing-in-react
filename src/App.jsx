import { useState } from "react"
import Button from "./components/Button";

function App() {

  const [count,setcount] = useState(0);

  return (
    <div>
      <p>Count : {count}</p>
      <Button onClick={()=>setcount(count+1)}>
        Increment 
      </Button>
    </div>
  )
}

export default App
