$.getJSON( "projectList.json", function( json ) {
    console.log("loaded");
});



const projectData = 
[{
    "header": "Computer Vision",
    "pText": "Finds the distance and angle to a target in real-time, using OpenCV. Made to run on a Raspberry Pi, to be used in a project for the UN!",
    "b1Text": "View on GitHub",
    "b1Color": "black", 
    "link1": "https://github.com/AbhiJ2706/mvs_vision_demo",
    "pType": "0",
    "src": "images/eight.png",
    "numBtn": "1"
},{
    "header": "Tensorflow Tic-Tac-Toe",
    "pText": "A Convolutional Neural Network developed using Keras, and trained on a custom dataset, which plays Tic-Tac-Toe!",
    "b1Text": "View on Github",
    "b1Color": "black", 
    "link1": "https://github.com/AbhiJ2706/tic-tac-toe-tensorflow-AI",
    "pType": "1",
    "src": "res/test.html",
    "numBtn": "1"
},{
    "header": "Generate Handwritten digits",
    "pText": "Gain-Adversarial Neural Network which generates pictures of handwritten digits from noise!",
    "b1Text": "View on GitHub",
    "b2Text": "View in Google Colab",
    "b1Color": "black", 
    "b2Color": "yellow", 
    "link1": "https://github.com/AbhiJ2706/generate-images-AI",
    "link2": "https://colab.research.google.com/github/AbhiJ2706/generate-images-AI/blob/master/Part_2_generate_handwritten_digits_from_noise_(1).ipynb",
    "pType": "0",
    "src": "images/eight.png",
    "numBtn": "2"
},{
    "header": "Lego EV3 Robots",
    "pText": "Built and programmed an EV3 robot with omnidirectional drive, controlled remotely or autonomously using Python!",
    "b1Text": "View on GitHub",
    "b2Text": "View Specifications",
    "b1Color": "black", 
    "b2Color": "blue", 
    "link1": "https://github.com/AbhiJ2706/swerve-drive-ev3-python",
    "link2": "https://docs.google.com/document/d/1UOjyzVWkjb-Cfk4fJmH21MGJ0wl8ht8JOWl_v-BuwAc",
    "pType": "1",
    "src": "res/test.html",
    "numBtn": "2"
},{
    "header": "Node Paint Server",
    "pText": "A full webapp and server, built using Node.js and Express.js, for drawing and sharing pictures! Complete with an account system and gallery.",
    "b1Text": "View on GitHub",
    "b1Color": "black", 
    "link1": "https://github.com/AbhiJ2706/paint-drawing-server",
    "pType": "0",
    "src": "images/eight.png",
    "numBtn": "1"
},{
    "header": "Android Paint",
    "pText": "An Android app for drawing and saving pictures!",
    "b1Text": "View on GitHub",
    "b1Color": "black", 
    "link1": "https://github.com/AbhiJ2706/paint-app-android",
    "pType": "0",
    "src": "images/eight.png",
    "numBtn": "1"
},{
    "header": "Robot Code",
    "pText": "During my time on FRC Team 2706, I worked on programming our team's robot, and a computer vision system for the robot!",
    "b1Text": "View on GitHub",
    "b2Text": "Check out the Team",
    "b1Color": "black", 
    "b2Color": "purple", 
    "link1": "https://github.com/FRC2706",
    "link2": "https://www.team2706.ca/",
    "pType": "0",
    "src": "images/eight.png",
    "numBtn": "2"
},{
    "header": "Games!",
    "pText": "We all need to have some fun. As part of my CS courses, I programmed a variety of games, some for the browser, some for Android! These are pretty old and a bit glitchy, be warned.",
    "b1Text": "View on GitHub",
    "b2Text": "View on Google Play",
    "b1Color": "black", 
    "b2Color": "green", 
    "link1": "https://github.com/FRC2706",
    "link2": "https://github.com/AbhiJ2706?tab=repositories",
    "pType": "1",
    "src": "res/test.html",
    "numBtn": "2"
},];

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
            {style: {display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}},
            e("div", {},
            e('h1', {style: {fontSize: "96px", marginLeft: "10%", width: "80%", textAlign: 'center'}}, this.props.headerText),
            e('p', {style: {marginLeft: "20%", marginRight: "20%", textAlign: 'center', width: '60%'}}, this.props.pText), 
            e('div', {style: {display: "flex", alignItems: "center", height: '10%', width: "40%", marginLeft: "30%", marginRight: "30%", paddingBottom: "5%"}}, 
                         e('button', {className: "ui " + this.props.b1Color + " button", onClick: () => {window.location.href = this.props.link1}, style: {position: "relative", height: "75%", width: '47%', margin: "auto"}}, this.props.b1Text),
                         (this.props.numBtn != 1)?
                         e('button', {className: "ui " + this.props.b2Color + " button", onClick: () => {window.location.href = this.props.link2}, style: {height: "75%", width: '47%', margin: "auto", float: "right"}}, this.props.b2Text) : null))
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

ReactDOM.render(postItems, domContainer)