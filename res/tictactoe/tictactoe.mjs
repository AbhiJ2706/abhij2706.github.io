const e = React.createElement

class Square extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return e("button", {className: "square", onClick: this.props.onClick}, this.props.value)
    }
}
  
class Board extends React.Component {
    constructor(props){
        super(props)
    }

    renderSquare(i) {
        return e(Square, {value: this.props.squares[i], onClick: () => {console.log("hello?"); this.props.onClick(i)}}, null);
    }

    render() {
        return e(
            "div",
            {},
            e("div", {className: "board-row"}, this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),
            e("div", {className: "board-row"}, this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),
            e("div", {className: "board-row"}, this.renderSquare(6),this.renderSquare(7),this.renderSquare(8))
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.board = [0,0,0,0,0,0,0,0,0]
        this.state = {
            history: [
                {
                squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        this.board[i] = 1;
        var prediction = model.predict(this.board)
        console.log(prediction)
        squares[i] = "X";
        this.setState({
            history: history.concat([
                {
                squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return e("div", {className: "game"}, 
                    e("div", {className: "game-board"}, 
                        e(Board, {squares: current.squares, onClick: i => this.handleClick(i)})),
                    e("div", {className: "game-info"}, e("div", {}, status), null))
    }
}

// ========================================

ReactDOM.render(e(Game, {}, null), document.getElementById("root"));

function calculateWinner(squares) {
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
    }
}
return null;
}