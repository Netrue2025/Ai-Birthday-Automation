import { Link } from "react-router-dom";

export function Back(){
    return(
        <div>
            <Link to={"/"}>
                <button>Back</button>
            </Link>
            
        </div>
    )
}
