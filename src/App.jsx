
import './App.css'
import Location from './components/Location'
import ramdonDImension from './helpers/ramdonDImension'
import AxiosHook from './hooks/AxiosHook'

function App() {
  let url = `https://rickandmortyapi.com/api/location/${ramdonDImension()}`
  const {db : location} = AxiosHook(url)

  return (
    <div className="App">
      <main>
        <form className='searh'>
          <input id='dimension' type="text" />
          <button>search</button>
        </form>
        <Location location={location}/>
      </main>
    </div>
  )
}

export default App
