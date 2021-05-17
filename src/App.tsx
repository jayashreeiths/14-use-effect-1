import { useState } from 'react'
import ChangeTitle from './components/effects/ChangeTitle'
import Clock from './components/effects/Clock'
import SunAjax from './components/effects/SunAjax'
import './App.css';

function App() {
    const [showClock, setShowClock] = useState(true)

    return (
        <div className="App">
            <h1> useEffect demo </h1>
            <main>
                <ChangeTitle />
                {showClock ? <Clock /> : null}
                <button onClick={() => setShowClock(!showClock)}> Show/hide clock </button>

                <hr />
                <SunAjax />

            </main>

        </div>
    );
}

export default App;
