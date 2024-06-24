import Radio from '@mui/joy/Radio';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';
import { useState, useEffect  } from "react";
import Button from '@mui/joy/Button';


const Question = (props)=>{
    const [id, setId] = useState(props.question.id);
    const [answer, setAnswer] = useState('');
    const handleChange = (e)=>{
        setAnswer(e.target.value);
    }
    useEffect(() => {
      }, []);

    return (
        <FormControl>
        <FormLabel>{props.question.question}</FormLabel>
        <RadioGroup defaultValue="outlined" name="radio-buttons-group">
                {
                    props.question.options.map((item, index)=>{
                        return (<Radio value={item} key={index} label={item} variant="outlined"  onChange={handleChange} />)
                    })
                }
        </RadioGroup>
        <Button size="sm" onClick={()=>
        {
            props.callback(id, answer)
        }
        }>Submit</Button>
        </FormControl>
    )
}

export default Question;