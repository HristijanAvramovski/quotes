import React from "react";
import { Paper, Button } from '@mui/material';

const Quote = ({author, category, quo}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Random quote</h1>
            <Paper elevation={4} style={{width: "30%", margin: "auto", borderRadius: "8px", padding: "15px"}}>
                <h3 style={{textAlign: "center"}}>{author}</h3>
                <hr style={{width: "80%"}}/>
                <p style={{textAlign: "center"}}>{quo}</p>
            </Paper>
        </div>
    );
}

export default Quote;