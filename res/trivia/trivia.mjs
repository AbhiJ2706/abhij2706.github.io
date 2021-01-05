let correctAnswers = 0; 
let incorrectAnswers = 0; 
var questionCount = -1; 
var myData = questions; 
let currentQuestion = myData[0].question; 
let currentAnswers = [myData[0].A, myData[0].B, myData[0].C, myData[0].D, myData[0].answer]; 
var questionCap = 0; 
let questionsDone = [];
var answer;

function incrementQN(){
	$('#questionSlider').progress('increment');
	console.log(questionCap);
}

function incrementRight(){
	$('#rightSlider').progress('increment');
	console.log(questionCap);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
shuffle(myData);

function start(){
	document.getElementById("title").style.visibility = "hidden"
	document.getElementById("title").style.display = "none"
	document.getElementById("game").style.visibility = "visible"
	document.getElementById("header").style.visibility = "visible"
	document.getElementById("game").style.display = "block"
}
	

function clear(){ 
	if (questionCount < questionCap){
		currentQuestion = myData[questionCount].question;
		currentAnswers = [myData[questionCount].A, myData[questionCount].B, myData[questionCount].C, myData[questionCount].D, myData[questionCount].answer]; 
		answer = myData[questionCount].answer
		if (questionCount != 0){
			incrementQN()
		}
		drawQuestion(currentQuestion, currentAnswers); 
	} else if (questionCount == questionCap) {
		incrementQN()
		$("#questions").hide();
		document.getElementById("results").style.visibility = "visible"
		document.getElementById("result").innerHTML = "You got " + correctAnswers.toString() + " questions correct!"
	}
}	

function submitQN(){
	const a = document.getElementById("checkedA").checked;
	const b = document.getElementById("checkedB").checked;
	const c = document.getElementById("checkedC").checked;
	const d = document.getElementById("checkedD").checked;

	if (questionCount == -1){
		if (a){
			questionCap = 5;
		} else if (b){
			questionCap = 10;
		} else if (c){
			questionCap = 15;
		} else if (d){
			questionCap = 25;
		}
		$('#questionSlider').progress({total: questionCap});
		$('#rightSlider').progress({total: questionCap});
	} else {
		if (a && answer == "A"){
			incrementRight();
			correctAnswers ++;
		} else if (b && answer == "B"){
			incrementRight();
			correctAnswers ++;
		} else if (c && answer == "C"){
			incrementRight();
			correctAnswers ++;
		} else if (d && answer == "D"){
			incrementRight();
			correctAnswers ++;
		} else {
			incorrectAnswers ++;
		}
	}
	questionCount ++;
	clear()
}

//function which draws the question onto screen
function drawQuestion(q, a) {
	document.getElementById("question").innerHTML = q;
	document.getElementById("A").innerHTML = a[0];
	document.getElementById("B").innerHTML = a[1];
	document.getElementById("C").innerHTML = a[2];
	document.getElementById("D").innerHTML = a[3];
	document.getElementById("checkedA").checked = false;
	document.getElementById("checkedB").checked = false;
	document.getElementById("checkedC").checked = false;
	document.getElementById("checkedD").checked = false;

}