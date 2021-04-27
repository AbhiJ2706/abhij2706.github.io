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
            {className: "plzwork ui segment", style: {height: "50%", width: "95%", margin:"2.5%", float: "left", borderRadius: "10px"}},
            e("div", {style: {height: "50%", width: "100%"}},
                e('h1', {style: {fontSize: "5vm", marginLeft: "4%", width: "92%", textAlign: 'center', color: "black"}}, this.props.headerText),
                e('p', {style: {marginLeft: "2%", marginRight: "2%", textAlign: 'center', width: '96%', color: "black"}}, this.props.pText)
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
                                              height: "36%", 
                                              width: '96%', 
                                              marginLeft: "2%", 
                                              marginRight:"2%", 
                                              marginTop: (this.props.numBtn == 1)? "27%" : "12%", 
                                              marginBottom: (this.props.numBtn == 1)? "27%" : "0", 
                                              borderRadius: "10px"
                                            }}, this.props.b1Text),
                         (this.props.numBtn != 1)?
                         e('button', {className: "ui " + this.props.b2Color + " button", 
                                      onClick: () => {window.location.href = this.props.link2}, 
                                      style: {height: "36%", 
                                              width: '96%', 
                                              marginLeft: "2%", 
                                              marginRight:"2%", 
                                              marginTop:"2%", 
                                              marginBottom: "12%",
                                              borderRadius: "10px"
                                            }}, this.props.b2Text) : null))
    }
}