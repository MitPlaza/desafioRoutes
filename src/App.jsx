import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto, Inicio, NotFound} from './layouts'
import Navegacion from './componentes/Navegacion';

function App() {
  return (
<>
<BrowserRouter>
<Navegacion/>
<Routes>
  <Route path='/' element={<Inicio />} />
  <Route path='/contacto' element={<Contacto />} />
  <Route path='*' element={<NotFound />} />
</Routes>
</BrowserRouter>
 </>
  )
}
export default App
