import axios from 'axios'
import {createContext, useState, useEffect} from 'react'

const MainContext = createContext()

const MainProvider = ({children}) => {
  
  const [categoria, setCategoria] = useState('general')
  const [pais, setPais] = useState('br')
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalNoticias, setTotalNoticias] = useState(0)

  const handleChangeCategory = (categoriaSelect)=>{
    setCategoria(categoriaSelect)
  }
  const handleChangeCountry = (countrySelect)=>{
    setPais(countrySelect)
  }

  const handleChangePagina = (e,valor)=>{
    setPagina(valor)
  }

  useEffect(() => {
    setPagina(1)
    const consultarNoticias = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data} = await axios(url)
      console.log(data)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
    }

    consultarNoticias()
  }, [categoria,pais])


  useEffect(() => {
    
    
    const consultarNoticias = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data} = await axios(url)
      setNoticias(data.articles)
    }

    consultarNoticias()
  }, [pagina])
  
  return (
    
    <MainContext.Provider value={
      { categoria, 
        setCategoria, 
        handleChangeCategory,
        handleChangeCountry,
        pais,
        noticias,
        totalNoticias,
        pagina,
        handleChangePagina
      }}>
      {children}
    </MainContext.Provider>
    
  )
}

export default MainContext

export {MainProvider}