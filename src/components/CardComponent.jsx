import {Avatar, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import DeleteIcon from '@mui/icons-material/Delete';
import './Card.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
          marginLeft: 5,
          marginRight: 5
        }
      }
    }
  },
});

export default function CardComponent ({ id, min, max, name, img, onClose}) {
    return (
      <ThemeProvider theme={theme}>
          <Card sx={{ minWidth: 345 }} key={id}>
            <CardHeader
              avatar={
                <Link to={`/ciudad/${id}`}>
                  <Avatar 
                    aria-label="recipe"  
                    src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
                    sx={{width: 80, height: 80}} 
                  />
                </Link>
              }
              title={name}
              action={<Chip color='primary' onClick={onClose} icon={<DeleteIcon/>} label='X' />}
            />
          <CardContent>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Maxima</TableCell>
                    <TableCell align='center'>Minima</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align='center'>{max}</TableCell>
                    <TableCell align='center'>{min}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <Paper></Paper>
          </CardContent>
        </Card>
    </ThemeProvider>
    );
};
