const e = React.createElement;

class ProjectDiv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            'div',
            {id: this.props.id, style: {overflow: "hidden", position: "relative", width: '100%', height: '100%', display: "block"}},
            e(ProjectSubDiv, {float: 'left', el: this.props.insideL}, null),
            e(ProjectSubDiv, {float: 'right', el: this.props.insideR}, null)
        );
    }
}

class ProjectTextBtnContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return e(
            'div',
            {style: {height: "50%", width: "100%"}},
            e("div", {style: {height: "70%", width: "100%"}},
                e('h1', {style: {fontSize: "5vm", marginLeft: "10%", width: "80%", textAlign: 'center'}}, this.props.headerText),
                e('p', {style: {marginLeft: "20%", marginRight: "20%", textAlign: 'center', width: '60%'}}, this.props.pText)
            ), 
            e('div', {style: {display: "flex", alignItems: "center", height: '30%', width: "100%", paddingBottom: "5%"}}, 
                         e('button', {className: "ui " + this.props.b1Color + " button", onClick: () => {window.location.href = this.props.link1}, style: {position: "relative", height: "75%", width: '47%', margin: "auto"}}, this.props.b1Text),
                         (this.props.numBtn != 1)?
                         e('button', {className: "ui " + this.props.b2Color + " button", onClick: () => {window.location.href = this.props.link2}, style: {height: "75%", width: '47%', margin: "auto", float: "right"}}, this.props.b2Text) : null))
    }
}