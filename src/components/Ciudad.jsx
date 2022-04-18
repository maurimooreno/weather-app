import { Avatar, Box, Card, CardContent, CardHeader, createTheme, Paper, Table, TableCell, TableRow, ThemeProvider } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const theme = createTheme({
    components: {
      MuiCardHeader: {
        styleOverrides: {
          root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          title: {
            fontSize: 28
          }
        }
      },
      MuiCard: {
          styleOverrides: {
              root: {
                margin: 'auto',
                marginTop: 20
              }
          }
      }
    },
  });

export default function Ciudad({onFilter}){
    const {ciudadId} = useParams();
    const city = onFilter(ciudadId);
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Card sx={{ minWidth: 345 , maxWidth: 500}} key={city.id} elevation={10}>
                    <CardHeader
                    avatar={
                        <Link to={`/ciudad/${city.id}`}>
                        <Avatar 
                            aria-label="recipe"  
                            src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} 
                            sx={{width: 80, height: 80}} 
                        />
                        </Link>
                    }
                    title={city.name}
                    />
                <CardContent>
                    <Paper>
                    <Table>
                        <TableRow>
                            <TableCell align='center'>Maxima</TableCell>
                            <TableCell align='center'>{city.max}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>Minima</TableCell>
                            <TableCell align='center'>{city.max}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>Cima</TableCell>
                            <TableCell align='center'>{city.weather}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>Viento</TableCell>
                            <TableCell align='center'>{city.wind} km/h</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>Cantidad de Nubes</TableCell>
                            <TableCell align='center'>{city.clouds}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>Latitud</TableCell>
                            <TableCell align='center'>{city.latitud}º</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center'>Longitud</TableCell>
                            <TableCell align='center'>{city.longitud}º</TableCell>
                        </TableRow>
                    </Table>
                    </Paper>
                    <Paper></Paper>
                </CardContent>
                </Card>
            </ThemeProvider>
        </Box>
        // <div className="ciudad">
        //         <div className="container">
        //             <h2>{city.name}</h2>
        //             <div className="info">
        //                 <div>Temperatura: {city.temp} ºC</div>
        //                 <div>Clima: </div>
        //                 <div>Viento: </div>
        //                 <div>Cantidad de nubes: </div>
        //                 <div>Latitud: </div>
        //                 <div>Longitud: </div>
        //             </div>
        //     </div>
        // </div>
    )
}