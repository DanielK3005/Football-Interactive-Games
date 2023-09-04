import React from "react";
import "./css/TopBar.css"
import {Button, ButtonGroup} from "react-bootstrap";
import {useLocation} from 'react-router-dom';

function TopBar(props) {
    const fantasy = "ליגה";
    const fantasyName = props.topbarLeagueName;
    const teamName = "שם קבוצה";
    const teamGivenName = "האקדמית";

    const subs = "חילופים";
    const maxSubs = props.subsLimit;

    const budget = "תקציב";
    const maxBudget = props.budgetLimit;

    const points = "נקודות";
    var weeklyPoints = 27;
    var totalPoints = 524;

    //calculating Budget
    const totalBudget = props
        .lineup
        .reduce((sum, item) => sum + item.price, 0);
    props.onCalcBudget(totalBudget);

    //counting Subs
    const totalSubs = props
        .lineup
        .reduce((count, item) => count + 1, 0);
    props.onCountingSubs(totalSubs);

    const location = useLocation();

    const showButton = location.pathname === `/Fantasy/${props.leagueChoice}/subs`;

    return (
        <div>
            <ButtonGroup
                className="btnTopBar"
                style={{
                position: 'fixed',
                top: '3.75%',
                right: '31.7%',
                width: '29%',
                height: '8%',
                backgroundImage: `url(https://img.freepik.com/free-vector/green-curve-frame-template_53876-99025.jpg?w=900&t=st=1693520574~exp=1693521174~hmac=31612521b16feec03c061c9f10c87d1c819cb5e958fb984c702d1e23fac40d2a)`, // Use the background image URL
                backgroundSize: 'cover', // Adjust the background size as needed
            }}>
                {showButton && <Button
                    className="btnItems"
                    style={{
                    height: '130%',
                    unicodeBidi: 'plaintext'
                }}>{budget}<hr className="seperator" style={{width: '75%'}}/>{props.currentBudget}M/{maxBudget}M</Button>}
                {showButton && <Button
                    className="btnItems"
                    style={{
                    height: '130%',
                    unicodeBidi: 'plaintext'
                }}>{subs}<hr className="seperator" style={{width: '75%'}}/>{props.currentSubs}/{maxSubs}</Button>}
                <Button
                    className="btnItems"
                    style={{
                    height: '130%',
                    unicodeBidi: 'plaintext'
                }}>{teamName}<hr className="seperator" style={{width: '75%'}}/>{teamGivenName}</Button>
                {!showButton && <Button
                    className="btnItems"
                    style={{
                    height: '150%',
                    fontSize: '1.2vw',
                    unicodeBidi: 'plaintext'
                }}>{points}<hr className="seperator" style={{width: '75%'}}/>{weeklyPoints}</Button>}
                <Button
                    className="btnItems"
                    style={{
                    height: '130%',
                    unicodeBidi: 'plaintext'
                }}>{fantasy}<hr className="seperator" style={{width: '75%'}}/>{fantasyName}</Button>
            </ButtonGroup>
        </div>
    )
}

export default TopBar;