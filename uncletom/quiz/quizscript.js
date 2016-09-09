//Constants
var question = document.getElementById("question");
var progress = document.getElementById("progress");
var startButton = document.getElementById("startButton");
var submitButton = document.getElementById("submitButton");
var continueButton = document.getElementById("continueButton");
var nextButton = document.getElementById("nextButton");
var buttons = document.getElementById("buttons");
var gamePane = document.getElementById("gamePane");
var utcTitle = "Uncle Tom's Cabin".italics();
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var rb1 = document.getElementById("rb1");
var rb2 = document.getElementById("rb2");

var rb3 = document.getElementById("rb3");
var rb4 = document.getElementById("rb4");
var correctIcon = document.getElementById("correctIcon");
var incorrectIcon = document.getElementById("incorrectIcon");
var answerText = document.getElementById("answerText");

//Object model for questions
function Question(question, op1, op2, op3, op4, correct, answerText){
	this.question = question;
	this.optionOne = op1;
	this.optionTwo = op2;
	this.optionThree = op3;
	this.optionFour = op4;
	this.correct = correct;
	this.answerText = answerText;
}

//Constant question array
var questions = [];
questions.push(

	new Question(
		"What was " + utcTitle + " responding to?",
		"The Emancipaton Proclamation",
		"The Fugitive Slave Act of 1850",
		"Criticism of abolitionist newspapers",
		"Nat Turner's rebellion",	2,
		utcTitle + " was written in response to the stricter Fugitive Slave Act created in the Compromise of 1850.")	,new Question(
		"Who escapes to freedom in " + utcTitle +"?",
		"Eliza",
		"Uncle Tom",
		"Eva St. Clare",
		"Simon Legree",
		1,
		"Eliza and her family escape from the Shelby plantation to reach Canada, where they are free."),	new Question(
		"Which of the following is " + "not".italics() + " used by Stowe to spread her message in " + utcTitle + "?",
		"Religious imagery",
		"Miss Ophelia's prejudice",
		"Similarities and differences between slave owners",
		"Caricatures of African Americans",
		4,
		"Caricatures and stereotypes of African Americans were not intended to be in the book, but were later spread through adaptations of the novel."),new Question(
		"What did many abolitionists criticize " + utcTitle +" for?",
		"Lack of research on Southern life",
		"Support of African colonization",
		"Unrealistic characters and events",
		"A message that was too forceful",
		2, "Abolitionists felt that the book's message was not strong enough, while the other criticisms were from Southerners."


		),
	new Question(
		"Which event in the movement to abolish slavery used methods that were most similar to Stowe's?",
		"Martyrdom of Nat Turner",
		"William Lloyd Garrison's " + "The Liberator".italics(),
		"Frederick Douglass' " + "North Star".italics(),
		"Harriet Tubman and the Underground Railroad",
		3, "While Garrison and Douglass both used writing to spread their ideas, Douglass' style was less controversial and had universal appeal, similar to " +utcTitle+". Thanks for playing!")
);
$(answerText).hide();
//Variables
var quesNum = 1;
var numCorrect = 0;

 

//Initialize function
startButton.onclick=function(){
	$(this).fadeOut();
	
	$(gamePane).animate({
		height: 300
	}, 600);
	
	DisplayQuestion(questions[quesNum-1],quesNum);
	
};

function DisplayQuestion(Question, questionNumber){
	$(answerText).fadeOut(function(){
		
	

	$(submitButton).fadeIn(800);
	});
	$(nextButton).fadeOut();

	$(correctIcon).fadeOut();

	$(incorrectIcon).fadeOut(function(){
		$(buttons).fadeIn(800);
	});
	


	$(question).fadeOut(function(){
		$(this).html(Question.question).fadeIn();
	});
	
	submitButton.setAttribute("disabled","disabled");
	$(progress).fadeOut(function(){
		$(this).html("Question " + questionNumber + " of 5").fadeIn();
	});
	$("#op1").html(Question.optionOne);
	$("#op2").html(Question.optionTwo);
	$("#op3").html(Question.optionThree);
	$("#op4").html(Question.optionFour);

	op1.onclick=function(){submitButton.removeAttribute("disabled");};
	op2.onclick=function(){submitButton.removeAttribute("disabled");};
	op3.onclick=function(){submitButton.removeAttribute("disabled");};
	op4.onclick=function(){submitButton.removeAttribute("disabled");};

	submitButton.onclick=function(){
		
		DisplayAnswer(questions[quesNum-1]);
		
	};

};

function DisplayAnswer(Question){
	var ans = Question.correct;
	var isCorrect;

	if((ans==1&&rb1.checked)||(ans==2&&rb2.checked)||(ans==3&&rb3.checked)||(ans==4&&rb4.checked)){
		$(question).fadeOut(function(){
			$(this).html("Correct!").fadeIn();
		});
		numCorrect++;
		isCorrect=true;
	}
	else{
		$(question).fadeOut(function(){
			$(this).html("Incorrect").fadeIn();
		});
		isCorrect=false;
	}

	$(progress).fadeOut(function(){
			$(this).html(numCorrect + " of " + quesNum+" correct").fadeIn();
	});

	$(submitButton).fadeOut(function(){
		
		
	});
	
	$(buttons).fadeOut(function(){
		$(answerText).html(Question.answerText);
		if(quesNum!=5){
		$(nextButton).css('display','inline').fadeIn();
	}
		$(answerText).fadeIn();
		if(isCorrect){
			$(correctIcon).fadeIn();
		}
		else{
			$(incorrectIcon).fadeIn();
		}
	});

	nextButton.onclick=function(){
		quesNum++;
		DisplayQuestion(questions[quesNum-1],quesNum);
	};

};

