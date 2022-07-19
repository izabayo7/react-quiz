import Form from './components/Form'
import { initComparisons } from './assets/js/compare.js'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const element = document.querySelector(".component-comp-slider");
    if (!element) initComparisons();
  }, [])

  return (
    <div className="App">
      <div className="component-comp-container">
        <div className="component-comp-component">
          <Form />
        </div>
        <div className="component-comp-component component-comp-overlay">
          <div className='realImage' />
        </div>
      </div>
    </div>
  )
}

export default App
