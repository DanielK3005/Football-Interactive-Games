import {React} from "react";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import "./css/Game.css";

function Game(props) {
    let navigate = useNavigate();
    const GameHandler = () => {
        console.log(`${props.gameID}`);
        console.log(`${props.name}`);
        const fantasyLeague = "PremierLeague";
        props.SetLeagueChoice(fantasyLeague);

        if (props.gameID === 1) {
            navigate(`/Fantasy/${fantasyLeague}`, {replace: false});
            const originalBackground = document.body.style.backgroundImage;

            return () => {
                document.body.style.backgroundImage = originalBackground;
            }
        } else if (props.gameID === 2) {
            navigate("/NotReadyYet", {replace: false})
        } else if (props.gameID === 3) {
            navigate("/NotReadyYet", {replace: false})
        }
    }

    return (
        <Button
            className="btnGame"
            variant="primary"
            style={props.style}
            onClick={GameHandler}>
            {props.name}
        </Button>
    )
}

export default Game;