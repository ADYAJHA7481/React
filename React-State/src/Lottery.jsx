import { useState } from "react";
import {genRandomNum, sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottery ({n=3, winningSum = 15}) {
    let [ticket, setTicket] = useState(genRandomNum(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genRandomNum(n));
    }


    return (
    <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
    );
}