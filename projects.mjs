const projectData = 
[{
    "header": "this is a test",
    "pText": "a test to show that this json poc works. according to all known laws of aviation, a bee should not be able to fly.",
    "b1Text": "View on GitHub",
    "b2Text": "View on Colab",
    "b1Color": "black", 
    "b2Color": "yellow", 
    "link1": "https://github.com/abhij2706",
    "link2": "https;//bit.ly",
    "pType": "0",
    "src": "images/eight.png",
    "numBtn": "2"
},
{
    "header": "this is another test",
    "pText": "another test to show that this json poc works. according to all known laws of aviation, a bee should not be able to fly",
    "b1Text": "View on Github",
    "b1Color": "black", 
    "link1": "https://github.com/abhij2706",
    "pType": "1",
    "src": "res/test.html",
    "numBtn": "1"
}];

console.log(projectData)

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
          'embed',
          {src: "res/test.html", style: {border: "1px solid black", width: "60%", height: "60%", marginLeft: "20%", marginRight: '20%', marginTop: '20%', marginBottom: '20%'}},
          null
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
            e('h1', {style: {fontSize: "96px", marginTop: "20%", textAlign: 'center'}}, this.props.headerText),
            e('p', {style: {marginLeft: "20%", marginRight: "20%", textAlign: 'center', width: '60%'}}, this.props.pText), 
            e('div', {style: {display: "flex", alignItems: "center", height: '10%', width: "40%", marginLeft: "30%", marginRight: "30%"}}, 
                         e('button', {className: "ui " + this.props.b1Color + " button", onClick: () => {window.location.href = this.props.link1}, style: {position: "relative", height: "75%", width: '47%', margin: "auto"}}, this.props.b1Text),                                                    
                         (this.props.numBtn != 1)?
                         e('button', {className: "ui " + this.props.b2Color + " button", onClick: () => {window.location.href = this.props.link2}, style: {height: "75%", width: '47%', margin: "auto", float: "right"}}, this.props.b2Text) : null)
        )
    }
}

var cid = -1;

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
    if (cid < projectData.length - 1){
        console.log(window.location.href)
        cid += 1;
        var newId = cid.toString();
        window.location.href = "#" + newId;
        console.log(cid, keys.length)
    }
}

const domContainer = document.querySelector('#root');

function projectDivCreate(){
    var toRender = [];
    console.log(projectData.length)
    for (var i = 0; i < projectData.length; i++){
        var entireDiv;
        var textDiv;
        var dispDiv;
        var inputData = projectData[i];
        if (inputData.pType == "0"){
            dispDiv = e(ProjectPicContainer, {src: inputData.src}, null)
        } else {
            dispDiv = e(ProjectDispContainer, {src: inputData.src}, null)
        }
        if (inputData.numBtn == 1){
            textDiv = e(ProjectTextBtnContainer, {headerText: inputData.header, 
                                                pText: inputData.pText,
                                                b1Text: inputData.b1Text,
                                                b1Color: inputData.b1Color, 
                                                link1: inputData.link1, 
                                                numBtn: 1}, null)
        } else {
            textDiv = e(ProjectTextBtnContainer, {headerText: inputData.header, 
                                                pText: inputData.pText,
                                                b1Text: inputData.b1Text,
                                                b2Text: inputData.b2Text,
                                                b1Color: inputData.b1Color,
                                                b2Color: inputData.b2Color, 
                                                link1: inputData.link1, 
                                                link2: inputData.link2,
                                                numBtn: 2}, null)
        }
        if (i % 2 == 0){
            entireDiv = e(ProjectDiv, {key : i, id: i, insideL: textDiv, insideR: dispDiv}, null)
        } else {
            entireDiv = e(ProjectDiv, {key : i, id: i, insideL: dispDiv, insideR: textDiv}, null)
        }
        toRender.push(entireDiv)
        console.log(toRender)
    }
    return toRender
}

var postItems = projectDivCreate()

postItems.push(
    e('div', {key: 10000, className: "vertical", style: {right: 8, bottom: 8, position: "fixed"} }, 
            e('button', {onClick: () => {moveUp()}, className: "ui icon button"}, e('i', {className: "angle double up icon"}, null)),
            e('button', {onClick: () => {moveDown()}, className: "ui icon button"}, e('i', {className: "angle double down icon"}, null))));

console.log(postItems)


ReactDOM.render(postItems, domContainer)