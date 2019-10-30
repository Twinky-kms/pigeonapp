import React from 'react';

//Wallet Page
//  Totalbalance 0000
//      Send or Request
//      Address Lists withbalances
//      List of Recent 10 transactions
//   Chart of Spending Comparing Months
//   Budget List
//


export default function Wallet() {
    return <div className="wallet">
        <div className="frontSection">
            <div>Balance 1000000pgn</div>
            <div><div>Send</div><div>Request</div></div>
        </div>
        <div>Recent transactons</div>
        <ul>
            <li>Sent 2500pgn to PKEFJEOSIFJ</li>
            <li>Received 1000pgn from PEOIJFS</li>
            <li>Sent 2500pgn to PKEFJEOSIFJ</li>
            <li>Received 1000pgn from PEOIJFS</li>
            <li>Click To see All</li>
        </ul>
    </div>
}