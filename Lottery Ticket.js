function bingo(ticket, win) {
    let minWins = 0;
    
    for (const [text, code] of ticket) {
        for (const char of text) {
            if (char.charCodeAt(0) === code) {
                minWins++;
                break;
            }
        }
    }
    
    return minWins >= win ? "Winner!" : "Loser!";
}