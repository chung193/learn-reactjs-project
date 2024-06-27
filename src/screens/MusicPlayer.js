import './ChatApp.css';
import React, {useState, useEffect} from 'react';
import sound1 from '../music/amalgam.mp3';
import sound2 from '../music/lotus-sky-dreams.mp3';
import sound3 from '../music/movement.mp3';
import Button from '@mui/joy/Button';

const list = [
    'amalgam.mp3',
    'lotus-sky-dreams.mp3',
    'movement.mp3',
];

const listSound = [sound1,sound2,sound3];

const MyAudio = ({sound}) => {
    useEffect(()=>{
        console.log(sound);
    },[sound])
    return (
    <audio controls autoPlay>
    <source src={sound} type="audio/mpeg"/>
    Your browser does not support the audio element.
    </audio>
    )
}

const MusicPlayer = ()=>{
    const [current, setCurrent] = useState(listSound[0]);
    const [currentText, setCurrentText] = useState(list[0]);
    
    return (
    <>
    <MyAudio sound={current}/>
    <p>{currentText}</p>
    <Button onClick={()=>{
        let length = list.length;
        let index = list.findIndex((element)=> element == currentText);
        if(index == length){
            setCurrent(listSound[length]);
            setCurrentText(list[length]);
        }else{
            setCurrent(listSound[index-1]);
            setCurrentText(list[index-1]);
        }
    }}>Prev</Button>
    <Button onClick={()=>{
        let length = list.length;
        let index = list.findIndex((element)=> element == currentText);
        if(index == length){
            setCurrent(listSound[0]);
            setCurrentText(list[0]);
        }else{
            setCurrent(listSound[index+1]);
            setCurrentText(list[index+1]);
        }
    }}>Next</Button>
    </>
    )
}

export default MusicPlayer;