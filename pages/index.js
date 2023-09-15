import Favourites from "./favourites"
import Laura from "./laura"
import Tool from "./tools"
import Todo from "./todo"

export default function Home(){
  return(
    <div>
      <h1>Wow!! my first react project </h1>
      <h2> why i lovw react </h2>
      <ul> 
        <li>it is reusable</li>
        <li>it is easy to use </li>
        <li>it is easy to learn and the community is wide </li>
        <Favourites name='obed'/>
        <Laura Favplayer='Declan Rice ' name='Luara'/>
        <Tool name='Mr cyber'  skillset1= 'html' skillset2= " css" skillset3= 'javascript' skillset4= 'anyone'/> 
        <h1>My todos</h1>
        <Todo  todo='learn usestat'/>
        <Todo todo='learn conditional rendering'/>
        <Todo todo='learn list'/>
      </ul>
    </div>
  )
}
