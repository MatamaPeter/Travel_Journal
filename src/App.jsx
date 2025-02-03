import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import journalData from '../public/data'

function App() {

  const journalDataElement = journalData.map((data) => {
    return(
      <Entry
        key={data.id}
        {...data}
      />
    )
  })

  return (
    <>
      <Header />
      {journalDataElement}
    </>
  )
}

export default App
