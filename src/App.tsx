import Header from './components/Cabecalho'
import { Hero } from './components/Hero/HeroStyled'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
