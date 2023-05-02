import React from "react";
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const AddQuote = ({addQuote}) => {
    const navigate = useNavigate();
    const [quoteData, updateQuoteData] = React.useState({
        author: "",
        category: "",
        quote: ""
    })
    function changeHandler(event){
        const {name, value}=event.target;
        updateQuoteData((preValues) => {
            return {
                ...preValues,
                [name]: value,
            };
        });
    }
    const clickHandler = (e) => {
        e.preventDefault();
        addQuote(quoteData);
        console.log(quoteData);
        navigate("/");
    }
    return (
        <div style={{marginLeft: "45%"}}>
            <h1 style={{color: "white"}}>Add quote</h1>
            <form>
                <TextField
                 id="outlined-basic"
                 label="Author"
                  variant="standard"
                  name={"author"}
                   onChange={changeHandler}/><br/>
                <TextField id="outlined-basic"
                 label="Category"
                  variant="standard"
                  name={"category"}
                   onChange={changeHandler}/><br/>
                <TextField id="outlined-basic"
                 label="Quote"
                 variant="standard"
                 name={"quote"}
                  onChange={changeHandler}/><br/>
                <button onClick={clickHandler} id="submit" type="submit">Add quote</button>
            </form>
        </div>
    );
}
export default AddQuote;