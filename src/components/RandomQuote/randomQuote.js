import React from "react";
import { Paper } from '@mui/material';
import {Link} from 'react-router-dom';
const randomQuote = ({quotes}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Random quote</h1>
            {quotes.map((quote, index) => {
            return (
                <Paper key={index} elevation={4} style={{width: "30%", margin: "auto", borderRadius: "8px", padding: "15px", marginBottom: "10px"}}>
                    <h3 style={{textAlign: "center"}}>{quote.author}</h3>
                    <hr style={{width: "80%"}}/>
                    <p style={{textAlign: "center"}}>{quote.quote}</p>
                </Paper>
                );
            })}
            <Link to={'/quotes/add'} style={{color: "yellow", marginLeft: "47%", borderRadius: "10px", border: "2px solid", fontSize: "20px", textDecorationLine: "none"}}>Add quote</Link>
        </div>
    );
}
export default randomQuote;