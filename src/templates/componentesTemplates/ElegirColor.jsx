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

export default function ElegirColor(props){
    const {colores} = props;
      const classes = useStyles();
      const [open, setOpen] = React.useState(false);
      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleOpen = () => {
        setOpen(true);
      };
    
    return(
        <div className="ElegirColor">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Color</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
                >

                {colores.map((color)=>(
                    <option value={color}>{color}</option>
                ))}
                </Select>
            </FormControl>
            </div>
    )
}