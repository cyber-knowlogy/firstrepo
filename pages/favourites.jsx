export default function Favourites(props){
     
     // props
    // we use props in react to pass data from one component to another from a parent component to a child component )
    // props is just a shorter way of saying prperties they are useful when you want the flow of data in your app to be dynamic
    let myName='henry'
    return(
         <>
         <p>my name is { myName }</p>

         <h1> My name is {props.name} , my favourite player is t silva</h1>
         </>

    )
}