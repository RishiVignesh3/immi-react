import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';

export const Question = ({ questionNo, question, answers, res, setRes }) => {
const storeAnswers = ({ answer, questionNo }) => {
    const resMap = { ...res };

    resMap[questionNo] = answer;
    setRes(resMap);
};

  return (
    <FormControl sx={{ display: 'block', p: 2 }}>
      <Typography id="demo-radio-buttons-group-label" gutterBottom sx={{ textAlign: 'start' }}>
        {questionNo}. {question}
      </Typography>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
        {answers?.map((answer) => (
          <FormControlLabel
            value={answer.value}
            onClick={() => storeAnswers({ answer, questionNo })}
            control={<Radio />}
            label={answer.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
