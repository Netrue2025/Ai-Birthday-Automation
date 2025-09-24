import { Userdetails } from "../components/userdetails";
import { Editprofile } from "../components/editprofile";
import { Back } from "../components/back";


export function Configuration(){
    return(
        <>
            <Back />
            <h1>User configuration</h1>
            <Userdetails />
            
            <div className="side">
                <h2>Edit User profile</h2>
                <Editprofile />
            </div>


        </>
    )
}