function projectDivCreate(projectData, idStart){
    var toRender = [[],[],[]];
    var rotate = 0
    console.log(projectData.length)
    for (var i = 0; i < projectData.length; i++){
        var textDiv;
        var inputData = projectData[i];
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
        toRender[rotate].push(textDiv)
        console.log(toRender)
        rotate++
        if (rotate > 2) {
            rotate = 0
        }
    }
    return toRender
}