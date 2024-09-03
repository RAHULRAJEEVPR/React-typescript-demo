
import { log } from 'console';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Input from './components/Input';
import Container from './components/Container';
import CounterUseReducer from './components/state/CounterUseReducer';

function App() {
  const personName={
    first:"Bruce",
    last:"wayne"
  }
  const nameList=[
    {
      first:"Bruce",
      last:"wayne"
    },{
      first:"manu",
      last:"wayne"
    },{
      first:"rahul",
      last:"wayne"
    }

  ]
  return (
    <div className="App">
<Greet name={"monee"} messageCount={10}/>
<Person name={personName}/>
<PersonList names={nameList}/>
<Status status='loading'/>
<Heading>
  Heading ...
</Heading>
<Oscar>
  <Heading>
    oscar kitti
  </Heading>
</Oscar>
<Button handleClick={(e,id)=>console.log("butoon Clicked",e,id)}/>
<Input value='' handleChange={e=>console.log(e.target.value)}/>
<Container style={{border:"3px solid black",padding:"1rem"}}/>
<CounterUseReducer/>
    </div>
  );
}

export default App;
