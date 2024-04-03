import {useState} from "react";

function Counter() {
    let [count, setCount] = useState(5)
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };
    return (
        <>
            <div>
                Giá trị {count}
                <div>
                    <button onClick={handleClick}>Increase</button>
                </div>
            </div>

        </>
    )
}
export default Counter;