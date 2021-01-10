import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Center from './Center';
import Left from './Left';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="App">
      {user?<>
        <Header user={user}/>
      <div style={{display:'flex',flexDirection:'row',flexWrap:"wrap"}}>
      <Sidebar/>
       <Center user={user} />
       <Left/>
      </div>
      </>: <Login/>}
    
     
      
    </div>
  );
}

export default App;
