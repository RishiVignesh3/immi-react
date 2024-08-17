import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Question } from './Question';
import mcqData from './question.fixtures';


export const MCQ = (props) => {
  const [res, setRes] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const totalRight = () => {
    return Object.values(res).filter((item) => item.isCorrect).length;
  };
  return (
    <Container sx={{ py: 6, display: 'flex' }}>
      <Box>
        {!isSubmitted && (
          <>
            <Typography variant="h3">Do Not refresh or the data will be wiped</Typography>
            {mcqData.map((item) => (
              <Question
                questionNo={item.id}
                question={item.question}
                answers={item.answers}
                setRes={setRes}
                res={res}
              />
            ))}
          </>
        )}
        {React.version}
        <Button onClick={() => setIsSubmitted(true)}> Submit </Button>
        {isSubmitted && (
          <Typography> You have answered {totalRight()} questions right...</Typography>
        )}
      </Box>
    </Container>
  );
};
