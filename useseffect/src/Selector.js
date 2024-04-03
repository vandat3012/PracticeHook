import {useEffect, useState} from "react";

function Selector () {
    let [select,setSelect] = useState(0);
    let [valueSelect,setValueSelect] = useState("")
    const choice = e => {
        setSelect(+e.target.value)
    }
    useEffect(() => {
        switch (select) {
            case 0:
                setValueSelect("JV");
                break;
            case 1:
                setValueSelect("JS")
                break;
            case 2:
                setValueSelect("HTML")
                break;
            default:
        }
    }, [select]);
    return(
        <div>
            <h1>Khóa Học</h1>
            <select onChange={choice}>
                <option value="0">JV</option>
                <option value="1">JS</option>
                <option value="2">HTML</option>
            </select>
            <h1>Your select: {valueSelect}</h1>
        </div>
    )
}
export default Selector;