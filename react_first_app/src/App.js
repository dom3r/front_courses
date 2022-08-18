import logo from './logo.svg';
import './App.css';
const subject = 'React';

function App(props) {
  console.log(props);
  const subject = props.subject;
  return(
    subject
  );
  
}

export default App;
