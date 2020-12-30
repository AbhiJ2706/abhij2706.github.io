const domContainer = document.querySelector('#root');

var postItems = projectDivCreate(projectData)

postItems.push(new Scroller(projectData).getButtons());

ReactDOM.render(postItems, domContainer)