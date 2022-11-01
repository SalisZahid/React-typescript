import { useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import User from './components/User';

function App() {

// const personName={
//   first:'Bruce',
//   last:'Wayne'
// }

// const nameList=[
//   {
//     first:'Bruce',
//     last:'Wayne'
//   },
//   {
//     first:'Clark',
//     last:'Kent'
//   },
//   {
//     first:'Princess',
//     last:'Diana'
//   }
// ]

useEffect(() => {
  let arr=[5,5,5,5,5]
  let minSum=0
  let maxSum=0
  let index=0
  let temp
  let temp2
  
  for(let i=0;i<arr.length;i++){
      index=i
      temp=arr.filter(item=>item!=arr[index])

      if(index==0){
          minSum=temp.reduce(function(a, b){
      return a + b;
  }, 0);
  maxSum=temp.reduce(function(a, b){
      return a + b;
  }, 0);
      }
      
      temp2 = temp.reduce(function(a, b){
      return a + b;
      
      
    }, 0);
    console.log('<<TEMP2>>',temp)
    if(temp2>=maxSum){
        maxSum=temp2
    }
     if(temp2<=minSum){
        minSum=temp2
    }
  
  } 
  console.log("<<<min - max>>>",minSum,maxSum)
  return () => {
    
  }
}, [])


  return (
    <div className="App">
      {/* <Person name={personName}/> */}
      {/* <PersonList names={nameList}/> */}
      {/* <Status status='error'/> */}
      {/* <Heading>HEAD</Heading>
      <Oscar>
      <Heading>Heading</Heading>
        
      </Oscar>
      <Greet name='Person1'  isLoggedIn={false}/>
      <Button handleClick={(event,id)=>{console.log('Clicked',event,id)}}/>
      <Input value='4'/> */}
      {/* <Container styles={{border:'1px solid black',padding:'1rem'}}/> */}

      <User/>
    </div>
  );
}

export default App;
