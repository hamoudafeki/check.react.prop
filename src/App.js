
import './App.css';
import Profile from './Profile/Profile';
function App() {
  const Data = {
    fullName : "Med abdelaziz feki",
    bio : 'lorem ipsum',
    profession : 'Business Development'
  }
  const handleName = (name) => {
    alert(`The name of the profile user is ${name} `)
  }
  return (
    <div className="App">
<Profile  data={Data} handleName={handleName} >
  <img style={{borderRadius:"15px", marginBottom:"20px"}} src= 'https://i.pinimg.com/564x/1e/4e/06/1e4e06fb9daf1df6b7e03036b1db8766.jpg' alt= 'anime'/>
  </Profile> 
    </div>
  );
}

export default App;
