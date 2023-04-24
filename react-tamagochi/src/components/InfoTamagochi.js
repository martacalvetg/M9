function InfoTamagochi(props){
    return(
        <div class="info">
            <h1 class="name">{props.name}</h1>
            <p>My age is {props.age}</p>
            <p>My health is {props.health}</p>
            <p>My happiness is {props.happiness}</p>
            <p>My crazyness is {props.crazyness}</p>
        </div>
    )
}

export default InfoTamagochi;