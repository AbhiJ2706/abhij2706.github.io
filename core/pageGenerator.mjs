function projectDivCreate(projectData){
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