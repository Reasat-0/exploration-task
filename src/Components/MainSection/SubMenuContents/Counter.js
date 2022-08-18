

import { useState } from "react"
import Button from '@mui/material/Button';


const Counter = () => {
    const [count,setCount] = useState(0);

    // () => {
    //     setCount( (prev) => {
    //         prev.count + 1
    //     })
    // }


    return (
        <div className="counter">
            <h4 className="mb-3"> { count ? `The Counter is now ${count}` : `Counter is set to ${count}. Click below Button to increase the Counter` } </h4>

            <Button variant="contained" onClick={ () => { setCount( (prev) => prev + 1) } }> Click to Increment By 1 </Button>
        </div>
    )
}

export default Counter;