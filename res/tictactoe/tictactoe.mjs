const e = React.createElement

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function play(){
    document.getElementById("intro").style.visibility = "hidden"
    document.getElementById("intro").style.display = "none"
    document.getElementById("root").style.visibility = "visible"
}

var model;

async function test() {
    model = await tf.loadLayersModel('model.json');
    console.log("success!")
}

test();

class Square extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return e("button", {className: "square", style: {border: "1px solid black", width: "30%", height: "30%"}, onClick: this.props.onClick}, this.props.value)
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
            {style: {width: "100%", height: "100%"}},
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
        console.log(Array(this.board))
        var prediction = model.predict(tf.tensor(Array(this.board)))

        console.log(prediction.dataSync(), this.board)

        const oPos = indexOfMax(prediction.dataSync())

        console.log(oPos)

        squares[i] = "X";
        squares[oPos] = "O";

        this.board[oPos] = -1;
        
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

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = [e("p", {key: 0}, "Winner: " + winner), e("button", {key: 1}, "Play again")];
        } else {
            status = "Next Turn";
        }

        return e("div", {style: {left: 0, top: 0}}, 
                    e("div", {id: "dash", style: {width: "100%", height: "10%", display: "inline-block", left: 0, top: 0}}, status),
                    e("div", {className: "game", style: {width: "100%", height: "100%"}}, 
                    e("div", {className: "game-board", style: {display: "block", width: "100%", height: "100%"}}, 
                        e(Board, {squares: current.squares, onClick: i => this.handleClick(i)}))))
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