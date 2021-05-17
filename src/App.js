import logo from './logo.svg';
import './App.css';
import LastData from './Components/LastData/LastData';
import SevenDays from './Components/SevenDays/SevenDays'

const API_key='0d56ed01b42743ed94fbfe658c541709'
// https://api.openweathermap.org/data/2.5/onecall?lat=53.195873&lon=50.100193&appid=0d56ed01b42743ed94fbfe658c541709
const lat='53.195873'
const lon='50.100193)'
const part = 'current'

let gettingWeather = async () => {
  const api_url = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_key}`)
  const data = await api_url.json();
  console.log(data)
}


function App() {
  return (
    <div className="App">
      <h2>Weather</h2> 
      <h2>forecast</h2>

      <LastData/>
      <SevenDays/>
    </div>
  );
}

export default App;
