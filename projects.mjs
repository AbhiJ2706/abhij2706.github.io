const e = React.createElement;

class ProjectDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            'div',
            {id: this.props.id, style: {width: '100%', height: '50%', display: "block"}},
            e(ProjectSubDiv, {float: 'left', el: this.props.insideL}, null),
            e(ProjectSubDiv, {float: 'right', el: this.props.insideR}, null)
        );
    }
}

class ProjectSubDiv extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return e(
            'div',
            {style:{float: this.props.float, display: 'inline-block', width:"49%", position: 'relative'}},
            e('div', {style: {marginTop: '100%'}}, null),
            e('div', {style: {position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}, this.props.el)
        );
    }
}

class ProjectPicContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return e(
            'img',
            {src: this.props.src, style: {width: "60%", marginLeft: "20%", marginRight: '20%', marginTop: '20%', marginBottom: '20%'}},
            null
        )
    }
}

class ProjectDispContainer extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
      return e(
          'div',
          {style: {width: "60%", marginLeft: "20%", marginRight: '20%', marginTop: '20%', marginBottom: '20%'}},
          this.props.inEl
      )
  }
}

class ProjectTextBtnContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return e(
            'div',
            {},
            e('h1', {style: {fontSize: "96px", marginTop: "25%", textAlign: 'center'}}, this.props.headerText),
            e('p', {style: {marginLeft: "20%", marginRight: "20%", textAlign: 'center', width: '60%'}}, this.props.pText), 
            e('div', {style: {height: '10%', width: "40%", marginLeft: "30%", marginRight: "30%"}}, 
                         e('button', {className: "ui button", onClick: () => {window.location.href = this.props.link1}, style: {height: "75%", width: '50%', margin: "auto", float: "left"}}, this.props.b1Text),
                         e('button', {className: "ui button", onClick: () => {window.location.href = this.props.link2}, style: {height: "75%", width: '50%', margin: "auto", float: "right"}}, this.props.b2Text))
        )
    }
}

var cid = -1;

keys = [0, 1, 2, 3, 4];

function moveUp(){
    if (cid > -1){
        console.log(window.location.href)
        cid -= 1;
        var newId = cid.toString();
        window.location.href = "#" + newId;
        console.log(cid)
    }
}

function moveDown(){
    if (cid < keys.length - 1){
        console.log(window.location.href)
        cid += 1;
        var newId = cid.toString();
        window.location.href = "#" + newId;
        console.log(cid, keys.length)
    }
}

const domContainer = document.querySelector('#root');

const x = e(ProjectTextBtnContainer, {headerText: "please", 
                                      pText: "according to all known laws of aviation, bees should not be able to fly. please work textalign oh god oh please", 
                                      b1Text: "please", 
                                      b2Text: "work", 
                                      link1: "https://bit.ly", 
                                      link2: "https://bit.ly"}, null)

const i = e(ProjectPicContainer, {src: "images/eight.png"}, null)

const postItems = [e(ProjectDiv, {key : 0, id: 0, insideL: x, insideR: i}, null),
                   e(ProjectDiv, {key : 1, id: 1, insideL: i, insideR: x}, null),
                   e(ProjectDiv, {key : 2, id: 2, insideL: x, insideR: i}, null),
                   e(ProjectDiv, {key : 3, id: 3, insideL: i, insideR: x}, null),
                   e(ProjectDiv, {key : 4, id: 4, insideL: x, insideR: i}, null),
                   
                   e('div', {key: 10000, className: "vertical", style: {right: 8, bottom: 8, position: "fixed"} }, 
                            e('button', {onClick: () => {moveUp()}, className: "ui icon button"}, e('i', {className: "angle double up icon"}, null)),
                            e('button', {onClick: () => {moveDown()}, className: "ui icon button"}, e('i', {className: "angle double down icon"}, null)))];

ReactDOM.render(postItems, domContainer);
