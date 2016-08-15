function Question(question, op1, op2, op3, op4){
	this.question = question;
	this.optionOne = op1;
	this.optionTwo = op2;
	this.optionThree = op3;
	this.optionFour = op4;

}

function getQuestionList(questionArray){

}
var ques = document.getElementById("questionTitle");
var startButton = document.getElementById("startButton");



startButton.onclick=function(){
	startButton.innerHTML = "Hello";
	$(ques).fadeOut(function(){
		$(ques).text("hello").fadeIn();

	});
}

var questions = new Array();
questions.push(new Question("What is your name?", "Bob", "John", "Stew", "Steve"));

var questionList = getQuestionList(questions);

for (var i = 0; i < 5; i++) {
	
}