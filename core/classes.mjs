const e = React.createElement;

class ProjectDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            'div',
            {id: this.props.id, style: {overflow: "hidden", position: "relative", width: '100%', height: '50%', display: "block"}},
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
            e('div', {style: {display: "inline-block", overflow: "hidden", position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}, this.props.el)
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
            {src: this.props.src, style: {width: "80%", marginLeft: "10%", marginRight: '10%', marginTop: '10%', marginBottom: '10%'}},
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
          {src: this.props.src, style: {scrolling: "no", position: "static", overflowY: "hidden", overflow: "hidden", width: "80%", height: "80%", marginLeft: "10%", marginRight: '10%', marginTop: '10%', marginBottom: '10%'}},
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

class Scroller {
    constructor(data){
        this.cid = -1
        this.data = data
    }

    moveUp(){
        if (this.cid > -1){
            this.cid --;
            var newId = this.cid.toString();
            window.location.href = "#" + newId;
        }
    }
    
    moveDown(){
        if (this.cid < this.data.length - 1){
            this.cid ++;
            var newId = this.cid.toString();
            window.location.href = "#" + newId;
        }
    }

    getButtons(){
        return e('div', {key: 10000, className: "vertical", style: {width: "3%", right: 4, bottom: 8, position: "fixed"} }, 
                e('button', {onClick: () => {this.moveUp()}, className: "ui icon button"}, e('i', {className: "angle double up icon"}, null)),
                e('button', {onClick: () => {this.moveDown()}, className: "ui icon button"}, e('i', {className: "angle double down icon"}, null)))
    }
}