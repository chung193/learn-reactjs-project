import './Quiz.css';
import { useState, useEffect, useRef } from "react";
import Question from '../components/Question';
import questionMock from '../mockup/Question';
import Button from '@mui/joy/Button';

const Quiz = () => {
    const [isEnd, setIsEnd] = useState(false);
    const [answerList, setAnswerList] = useState([]);
    const [score, setScore] = useState(0);
    const [qEnd, setQEnd] = useState(questionMock);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
        console.log(isEnd);
    }, []);

    const handleSelect = (id, answer) => {
        let result = answerList.find((item) => item.id == id);
        let newArr = [...answerList];
        if (result == null) {
            let newObj = {
                id: id,
                answer: answer
            }

            newArr.push(newObj);
            setAnswerList(newArr);
        } else {
            result.answer = answer;
        }
    }

    const handleSubmit = () => {
        let newScore = 0;
        questionMock.forEach(element => {
            let result = answerList.find((item) => item.id == element.id);
            if (result.answer == element.answer) {
                newScore += element.score;
            }
        });
        let newArr = [...qEnd];
        newArr.forEach(element => {
            let result = answerList.find((item) => item.id == element.id);
            element.userAnswer = result.answer;
            element.isTrue = result.answer == element.answer ? true : false;
        });
        setQEnd(newArr);
        setIsEnd(true);
        setScore(newScore);
    }

    return (
        <div className='quiz'>
            <p>Render Count: {count.current}</p>
            {
                isEnd ?
                    qEnd.map((item, index) =>
                        <div><Question question={item} list={index + 1} key={item.id} callback={handleSelect} /><hr /></div>
                    )
                    :
                    questionMock.map((item, index) =>
                        <div><Question question={item} list={index + 1} key={item.id} callback={handleSelect} /><hr /></div>
                    )
            }
            <Button onClick={
                handleSubmit
            }>Submit</Button>
            <p>Điểm {score}</p>
        </div>)
}

export default Quiz;