import './App.css'
import data from './data/data.tsx'
import Catalog from './components/Catalog.tsx'
function App() {
  console.log(data)
  return (
    <>
      <Catalog data={data.newProducts} name='new' title='New ceramics'/>
      <Catalog data={data.popularProducts} name='popular' title='Our popular products'/>

    </>
  )
}

export default App
