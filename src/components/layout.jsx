import { Staticbar } from "./staticbar"
import { Outlet } from "react-router-dom"
import "../styles/layout.css"
export function Layout(){
    return(
        <>
            
            <main>
                <Staticbar />
                <Outlet />
            </main>
        </>
    )
}