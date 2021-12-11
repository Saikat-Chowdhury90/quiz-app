import React,{useState , useEffect} from 'react';
import '../App.css';
import quizData from '../data/quiz.json';
import {Questionaire} from '../components';

function MainPage() {
  const [questions,setQuestions]= useState([]);
  const [currentIndex, setCurrentIndex]=useState(0);
  const [score , setScore] =useState(0);
  const [showAnswers , setshowAnswers] = useState(false);
  const [submitAnswers , setsubmitAnswers] = useState(false);
 
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

  


const handleAnswer = (answer) => {

  

if(!showAnswers && submitAnswers)
{
  if(answer === questions[currentIndex].correct_answer){
    setScore(score +1);
  }
}
 
  setshowAnswers(true);
  setsubmitAnswers(false);
  

};

const handleNextQuestion = () => {
  if(submitAnswers)
  {
    setshowAnswers(false);

    setCurrentIndex(currentIndex+1);
  }
  
}

const handlesubmitAnswer = () => {
setsubmitAnswers(true);
}

      return questions.length > 0 ? (
         
        <div className="container">
          {currentIndex >= questions.length ? (
             
         <h1 className="text-3xl text-white font-bold">You Scored : {score} out of 10</h1>
        
      ) :(
        <Questionaire data={questions[currentIndex]} submitAnswers={submitAnswers} handlesubmitAnswer={handlesubmitAnswer} handleNextQuestion={handleNextQuestion} showAnswers={showAnswers} handleAnswer={handleAnswer} /> 
      )}
      </div> ) : (
        <h1 className="text-2xl text-white font-bold">Loading...</h1>
      );
     
      
      
    
  
};



export default MainPage;
