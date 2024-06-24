import './Quiz.css';
import { useState, useEffect  } from "react";
import Question from '../components/Question';
import questionMock from '../mockup/Question';
const Quiz=()=>{
    const [isEnd, setIsEnd] = useState(false);
    const [current, setCurrent] = useState(0);
    const [questionBank, setQuestionBank] = useState(questionMock);
    const [score, setScore] = useState(0);
    useEffect(() => {
      }, []);

      const handleSubmit = (id, answer)=>{
            debugger;
            let result = questionBank.find((item) => item.id == id);
            debugger;
            if(result.answer == answer){
                setScore(score + result.score);
                debugger;
            }
      }
    return (<>
    {
        questionBank.map((item, index)=>{
           return <Question question={item} key={index} callback={handleSubmit}/>
        })
    }
    <p>{score}</p>
    </>)
}

export default Quiz;