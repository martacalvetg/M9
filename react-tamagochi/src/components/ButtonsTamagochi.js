function ButtonsTamagochi(props){
    return(
        <div class="actions">
            <button onClick={props.feed}>Feed me</button>
            <button onClick={props.play}>Play with me</button>
            <button onClick={props.read}>Read me a story</button>
            <button onClick={props.hit}>Don't hit me</button>
        </div>
    )
}

export default ButtonsTamagochi;