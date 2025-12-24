export const VictoryMessage = ({ moves }) => {
    return (
        <div className="win-message">
            <h2>Congratulations !</h2>
            <p>You Completed the game in {moves} moves !</p>
        </div>
    )
}