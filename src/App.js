import logo from './logo.svg';
import './App.css';
// import {Answer} from '../components/Answer'

let links = ["services","Projects","About"]
function App() {
  return (
    <div className="App">
     <div>Home</div>
     <div className="middle">
       {links.map((sub)=>(
         <Answer name={sub}/>
       ))}
      
     </div>
     <button className='btn'>contact</button>
    </div>
  );
}

const Answer = (props) =>{
  return <p>{props.name}</p>
}

// export {Answer

export default App;
