import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, total }) {
    return (
        <div className="infoBox">
            <Card>
                <CardContent>
                    {/* Coronavirus Cases (Title) */}
                    <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                    
                    {/* Number of NEW cases */}
                    <h2 className="infoBox__cases">{cases}</h2>
                    
                    {/* TOTAL */}
                    <Typography className="infoBox__total" color="textSecondary">{total}Total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
