const domContainer = document.querySelector('#root');

const idStart = 0

var postItems = projectDivCreate(projectData, idStart)

ReactDOM.render(postItems, domContainer)