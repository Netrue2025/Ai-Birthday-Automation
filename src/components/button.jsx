import { Link } from "react-router-dom";


export function Button(props){
    return(
        <div>
            <Link to={"/"}>
                <button onClick={props.click} className={props.className}>{props.name}</button>
            </Link>
            
        </div>
    )
}
