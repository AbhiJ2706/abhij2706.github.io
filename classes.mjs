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
            {className: "plzwork ui segment", style: {height: "50%", width: "95%", margin:"2.5%", float: "left", backgroundColor: "#e5e5e5", borderRadius: "5%"}},
            e("div", {style: {height: "50%", width: "100%"}},
                e('h1', {style: {fontSize: "5vm", marginLeft: "4%", width: "92%", textAlign: 'center', color: "black"}}, this.props.headerText),
                e('p', {style: {overflow: "scroll", marginLeft: "2%", marginRight: "2%", textAlign: 'center', width: '96%', color: "black"}}, this.props.pText)
            ), 
            e('div', {style: {
                                height: '50%', 
                                width: "50%", 
                                marginLeft: "25%", 
                                marginRight: "25%"
                            }}, 
                         e('button', {className: "ui " + this.props.b1Color + " button", 
                                      onClick: () => {window.location.href = this.props.link1}, 
                                      style: {position: "relative", 
                                              height: "40%", 
                                              width: '100%', 
                                              marginLeft:"0", 
                                              marginRight:"0", 
                                              marginTop: (this.props.numBtn == 1)? "25%" : "10%", 
                                              marginBottom: (this.props.numBtn == 1)? "25%" : "0", 
                                            }}, this.props.b1Text),
                         (this.props.numBtn != 1)?
                         e('button', {className: "ui " + this.props.b2Color + " button", 
                                      onClick: () => {window.location.href = this.props.link2}, 
                                      style: {height: "40%", 
                                              width: '100%', 
                                              marginBottom: "10%"
                                            }}, this.props.b2Text) : null))
    }
}