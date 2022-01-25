import { useState } from "react";

function Button(props)
{
    const [count, setCount] = useState(false);
    return(
        <button className="bg-blue-500 sm:bg-orange-400 md:bg-red-500 hover:bg-blue-700  rounded font-bold text-white py-2 px-4" onClick={() => {
            if(props.type == "up") { setCount(count + 1) }
            if(props.type == "down") { setCount(count - 1); }
        }}>{props.name}</button>
    );
}

export default Button;