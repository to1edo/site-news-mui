import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useMainContext from '../hooks/useMainContext'
import Noticia from './Noticia'

const ListadoNoticias = () => {
    // const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()
    const { noticias, pagina, totalNoticias, handleChangePagina } = useMainContext()

    const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h4'
                component={'h2'}
            >
                Latest News
            </Typography>

            <Grid
                container
                spacing={2}
            >

                {noticias.map(noticia => (
                    <Noticia 
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>

            <Stack 
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'
            >
                <Pagination 
                    count={totalPaginas} 
                    color="primary" 
                    onChange={handleChangePagina}
                    page={pagina}
                />
            </Stack>
        </>
    )
}

export default ListadoNoticias