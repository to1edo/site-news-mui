import {Container, Typography, Grid} from '@mui/material'
import Formulario from './components/Formulario'
import { MainProvider } from './context/MainProvider'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  return (
    <MainProvider>
        <Container>
          
          <header>
            <Typography align='center' variant='h3' component='h1'>
              Buscador de Noticas
            </Typography>
          </header>

          <Grid container direction='row' justifyContent='center' alignItems='center'>
            
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Formulario/>
            </Grid>

          </Grid>

          <ListadoNoticias />

        </Container>
    </MainProvider>    
  )
}

export default App
