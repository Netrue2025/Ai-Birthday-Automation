import { Link } from "react-router-dom";


export function Button(props){
    return(
        <div>
            <Link to={"/"}>
                <button>{props.name}</button>
            </Link>
            
        </div>
    )
}
