import './App.css';
import Name from './Name';

const data = {
  firstName: 'Kristina',
  shortBiography: 'I`m 24 y.o.',
  publicContacts: '555-55-55',
};



const App = () => (
  <div className="App">
    <h1>{data.firstName}</h1>
    <h2>{data.shortBiography}</h2>
    <h3>{data.publicContacts}</h3>
    <p>----------------------</p>
     <Name name="Ivan"></Name>
  </div>
)


export default App;
