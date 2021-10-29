import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import "./ProductoCompleto.css";

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const {talles} = props;
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const tallesDisp=[];

  const handleChange = (event) => {
    setAge(event.target.value);
  };


function createArrayTalles(){
    const arrayTalles = splitTalles();
    return arrayTalles;
}

function splitTalles(){
   const tallesSplit = talles.split(',');
   const arrayTalles=[];
   for (let x = 0; x < tallesSplit.length; x++) {
       if(x%2==0){
          arrayTalles.push([tallesSplit[x], tallesSplit[x+1]]);
       }    
   }
   return arrayTalles;
}

  const validarTalles = () => {
    createArrayTalles()
    const arrayTalles=splitTalles()
    if(arrayTalles[0][1]>0){
      tallesDisp.push("XS")
    }
    if(arrayTalles[1][1]>0){
      tallesDisp.push("S")
    }
    if(arrayTalles[2][1]>0){
      tallesDisp.push("M")
    }
    if(arrayTalles[3][1]>0){
      tallesDisp.push("L")
    }
    if(arrayTalles[4][1]>0){
      tallesDisp.push("XL")
    }

    console.log(tallesDisp);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="ElegirTalle">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Talle</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          onClick={validarTalles()} 
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >

          {tallesDisp.map((talle)=>(
            <option value={talle}>{talle}</option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}