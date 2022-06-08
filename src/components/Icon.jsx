const Icon = (props) => {
    return (
        <div className="icon" onClick={props.clicked} style={{cursor: "pointer", width: "30px", height: "30px", display: "flex", alighItems: "center", justifyContent: "center"}}>{props.children}</div>
    )
};

export default Icon;