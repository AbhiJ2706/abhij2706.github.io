const domContainer = document.querySelector('#root2');

const idStart = 1000

var newData = [];

for (var i = 0; i < projectData.length; i++){
    if (projectData[i].pType == "2"){
        newData.push(projectData[i])
    }
}

var postItems = projectDivCreate(newData, idStart)

ReactDOM.render(postItems, domContainer)