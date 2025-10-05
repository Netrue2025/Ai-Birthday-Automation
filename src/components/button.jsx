

export function Button(props){
    return(
        <div>
            
            <button onClick={props.click} className={props.className}>{props.name}</button>
    
        </div>
    )
}
