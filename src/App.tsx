import ChangeTitle from './components/effects/ChangeTitle'
import Clock from './components/effects/Clock'
import './App.css';

function App() {
    return (
        <div className="App">
            <h1> useEffect demo </h1>
            <main>
                <ChangeTitle />
                <Clock />
            </main>

        </div>
    );
}

export default App;
