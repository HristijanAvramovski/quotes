import React from "react";
import { Paper } from '@mui/material';

const listQuotes = ({quotes}) => {
    return (
        <div>
        <hr/>
        <h1 style={{textAlign: "center"}}>List of famous quotes</h1>
        {quotes.map((quote, index) => {
            return (
                <Paper key={index} elevation={4} style={{width: "30%", margin: "auto", borderRadius: "8px", padding: "15px", float: "left"}}>
                    <h3 style={{textAlign: "center"}}>{quote.author}</h3>
                    <hr style={{width: "80%"}}/>
                    <p style={{textAlign: "center"}}>{quote.quote}</p>
                </Paper>
            );
        })}
        </div>
    );
}
export default listQuotes;