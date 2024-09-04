

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
import ThemeContextProvider from './components/context/ThemeContext';
import Box from './components/context/Box'
import UserContextProvider from './components/context/UserContext';
import User from './components/context/User';
import { Counter } from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import RandomNumber from './components/restrictions/RandomNumber';
import Toast from './components/templateliterals/Toast';
import Inputs from './components/html/Inputs';
import Buttons from './components/html/Buttons';
import Text from './components/polymorphic/Text';

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
<ThemeContextProvider>
  <Box/>
</ThemeContextProvider>
<UserContextProvider>
  <User/>
</UserContextProvider>
<Counter message='class message'/>
<Private isLoggedin={true} component={Profile}/>
<List items={["batman","superman","Spiderman"]} onClick={(item)=>console.log(item)}/>
<List items={[1,2,3]} onClick={(item)=>console.log(item)}/>
  <RandomNumber value={10} isPositive/>
  <Toast postion='right-bottom'/>
  <Buttons variant='primary' onClick={()=>console.log("button click") }>
    click me
  </Buttons>
  <Inputs/>
  <Text as="h2" size='lg' >Heading</Text>
    </div>
  );
}

export default App;
