import Header from './components/Header/Header.jsx';
import {Fragment} from "react"
import CoreConcepts from './components/CoreConcepts.jsx';
import Example from './components/Examples.jsx';
function App() {

  

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <Example/>
      </main>
    </Fragment>
  );
}

export default App;
