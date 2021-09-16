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

  const validarTalles = () => {
    if(talles.XS>0){
      tallesDisp.push("XS")
    }
    if(talles.S>0){
      tallesDisp.push("S")
    }
    if(talles.M>0){
      tallesDisp.push("M")
    }
    if(talles.L>0){
      tallesDisp.push("L")
    }
    if(talles.XL>0){
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