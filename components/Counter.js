import { useState } from "react";

function Counter(props)
{
    const [count, setCount] = useState(false);
    return(
        <p>Valor: {count}</p>
    );
}

export default Counter;