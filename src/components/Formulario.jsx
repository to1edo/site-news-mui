import useMainContext from '../hooks/useMainContext'
import { 
  FormControl, 
  InputLabel, 
  Select,
  MenuItem
} from '@mui/material'

import {CATEGORIAS, countries} from '../data'

const Formulario = () => {

  

  const {categoria, pais, handleChangeCategory, handleChangeCountry} = useMainContext()

  return (
    <>
      <FormControl fullWidth sx={{marginTop:'25px'}}>
          <InputLabel >Categorias</InputLabel>
          <Select onChange={(e) => handleChangeCategory(e.target.value)} value={categoria} label='Categorias'>
            <MenuItem key={'noneCategory'} defaultValue=''></MenuItem>
            {CATEGORIAS.map(categoria =>(
              <MenuItem key={categoria.value} value={categoria.value}>
                {categoria.label}
              </MenuItem>
            ))}
          </Select>
      </FormControl>


      <FormControl fullWidth sx={{marginTop:'25px'}}>
          <InputLabel>Paises</InputLabel>
          <Select onChange={(e) => handleChangeCountry(e.target.value)} value={pais} label="What's your Country" >
            <MenuItem key={'noneCountry'} defaultValue=''></MenuItem>
            {countries.map(country =>(
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
      </FormControl>


    </>
  )
}

export default Formulario