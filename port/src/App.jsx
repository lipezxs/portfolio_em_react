
// import './App.css'
import Cabecalho from './components/Cabecalho';
import Body from './components/Body';
import Footer from './components/Footer';
import './components/styles/cabeçalho/cabecalho.sass';
import './components/styles/Corpo/body.sass';
import './components/styles/Rodapé/footer.sass';
import './components/styles/variables.sass';

function App() {

  return (
    <>
      <Cabecalho />
      <Body />
      <Footer />
    </>
  )
}

export default App
