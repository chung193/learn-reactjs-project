import Radio from '@mui/joy/Radio';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';


const Question = (props)=>{
    console.log(props.question.isTrue != 'undefined');
    return (
        <FormControl>
        <FormLabel>{props.list}. {props.question.question}</FormLabel>
        <RadioGroup defaultValue="outlined" name="radio-buttons-group">
                {
                    props.question.options.map((item, index)=>
                        <Radio value={item} key={index} label={item}
                    color={
                        (props.question.hasOwnProperty('isTrue')) ? 
                        (props.question.isTrue ? ((props.question.answer == item) ? 'success' : 'neutral') : ((props.question.userAnswer == item) ?   'danger' : (props.question.answer == item) ? 'success' : 'neutral'))
                        : 'neutral'
                    } 
                    variant="outlined"  onChange={()=>{
                            props.callback(props.question.id, item)}}/>
                    )
                }
        </RadioGroup>
        </FormControl>
    )
}

export default Question;