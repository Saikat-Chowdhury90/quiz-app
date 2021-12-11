import React from 'react';



const Questionaire = ({
    showAnswers,
    submitAnswers,
    handlesubmitAnswer,
    handleAnswer,
    handleNextQuestion,
    data: {question, correct_answer , answers},
}) => {



return(
<div>
    <div className="bg-white text-black p-10 rounded-lg shadow-md  ">
        <h2 className="font-bold text-2xl" dangerouslySetInnerHTML={{__html:question}}/>
    </div>
    <div className="flex flex-wrap mt-4 justify-between ">
      {answers.map((answer , idx) => {
        const bgColor = (showAnswers && submitAnswers) ? answer === correct_answer ? 'bg-green-500'
        : 'bg-red-500':'bg-white';

        const textColor = (showAnswers && submitAnswers) ? 'text-white' : 'text-black';
        return (
          <>
         <button
                key={idx}
              className={` ${bgColor} ${textColor} hover:border-4 hover:border-indigo-500/100 p-4  font-semibold rounded shadow w-5/12 mb-4 `}
              onClick={() => handleAnswer(answer)}>
                  {answer}
          </button>

         </>
         );
     })

      }

    

    </div>
    <div className="flex items-center justify-center">
      <button 
        onClick={handlesubmitAnswer}
        className={` bg-black border-2 border-white hover:bg-white hover:text-black hover:border-black text-white p-4  font-semibold rounded  w-5/12 mt-10   `} >
       OK
          </button>
        </div>
        
    {(showAnswers && submitAnswers) && (
         <div className="flex items-center justify-center">
         <button onClick={handleNextQuestion}
         className={` bg-black border-2 border-white hover:bg-white hover:text-black hover:border-black text-white p-4  font-semibold rounded  w-5/12 mt-10   `} >
           Next
         </button>
         </div>
     )
        
     
     }

        
        
      
    
</div>

);
};

function  everydayIMShuffling(arr) 
{
    for (let i = 0; i < arr.length; i++) {
      const idx1 = Math.floor(Math.random() * arr.length);
      const idx2 = Math.floor(Math.random() * arr.length);

      

      
    }
}

export default Questionaire;

