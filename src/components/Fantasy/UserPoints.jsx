import React from "react";
import { Button } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import "./css/UserPoints.css"

function UserPoints()
{
    const weeklyPoints = 20;
    const totalPoints = 524;
    // change the class name of btnDeadLine


    return(
        <div>
            <Button className="btnPoints" style={{position:'fixed', top:'12%', left:'20%', unicodeBidi:'plaintext'}}>
            <Badge> 
            סך נקודות שבועי:
            <br/>
            {weeklyPoints}
            </Badge>
            <hr className="seperator"/>
            <Badge> 
            סך נקודות כללי:
            <br/>
            {totalPoints}
            </Badge>
            </Button>
         </div>
    )
}

export default UserPoints;