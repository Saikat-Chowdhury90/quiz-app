import React,{useState , useEffect} from 'react';
import '../App.css';
import quizData from '../data/quiz.json';
import {Questionaire} from '../components';

function MainPage() {
  const [questions,setQuestions]= useState([]);
  const [currentIndex, setCurrentIndex]=useState(0);
  const [score , setScore] =useState(0);
  const [showAnswers , setshowAnswers] = useState(false);
 
  useEffect(() => {
    
    const questions = quizData.results.map((question) => 
    ({
      ...question,
      answers: [
        question.correct_answer,
        ...question.incorrect_answers
      ].sort(() => Math.random() - 0.5),
    })
    )
    setQuestions(questions);
  }, []);

  
  //console.log(quizData.results);
  // let max=10;
  // let i = Math.floor(Math.random() * max);

const handleAnswer = (answer) => {

  // const newIndex = currentIndex + 1
  // setCurrentIndex(currentIndex + 1);
if(!showAnswers)
{
  if(answer === questions[currentIndex].correct_answer){
    setScore(score +1);
  }
}
 
  setshowAnswers(true);
  

};

const handleNextQuestion = () => {
  setshowAnswers(false);

  setCurrentIndex(currentIndex+1);
}



      return questions.length > 0 ? (
         
        <div className="container">
          {currentIndex >= questions.length ? (
             
         <h1 className="text-3xl text-white font-bold">You Scored : {score}/10</h1>
        
      ) :(
        <Questionaire data={questions[currentIndex]} handleNextQuestion={handleNextQuestion} showAnswers={showAnswers} handleAnswer={handleAnswer} /> 
      )}
      </div> ) : (
        <h1 className="text-2xl text-white font-bold">Loading...</h1>
      );
     
      
      
    
  
};



export default MainPage;
