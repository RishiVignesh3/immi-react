import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  styled,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { FormData as Forms } from './FormData';

const StyledFormControl = styled(FormControl)({
  width: '250px',
});

/**
 * 
 * Use the LearnSpring repo to use this components functionality
 */
export const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    retypePassword: '',
    age: null,
    image: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const file = e.target?.files?.[0];
    console.log(file);
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file, // Store the file object
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const formDatum = new FormData();
    formDatum.append('image', formData.image);
    formDatum.append('password', formData.password);
    formDatum.append('age', formData.age);
    formDatum.append('email', formData.email);
    formDatum.append('name', formData.name);
    try {
      const response = await axios.post('http://localhost:3001/students', formDatum, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Add any additional logic after successful submission
    } catch (error) {
      console.error(error);
      // Handle error if the request fails
    }
  };

  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Box
        sx={{
          padding: 2,
          display: 'grid',
          gap: '5px',
          gridTemplateColumns: 'auto auto',
          width: '500px',
          border: '1px solid',
          borderRadius: '10px',
        }}
      >
        <StyledFormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            aria-describedby="email-helper-text"
            value={formData.email}
            onChange={handleChange}
          />
          <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
        </StyledFormControl>

        <StyledFormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            aria-describedby="name-helper-text"
            value={formData.name}
            onChange={handleChange}
          />
          <FormHelperText id="name-helper-text">Share us your name.</FormHelperText>
        </StyledFormControl>

        <StyledFormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            aria-describedby="password-helper-text"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormHelperText id="password-helper-text">
            Don't share your password with anyone.
          </FormHelperText>
        </StyledFormControl>

        <StyledFormControl>
          <InputLabel htmlFor="retypePassword">Re-Type Password</InputLabel>
          <Input
            id="retypePassword"
            aria-describedby="retype-password-helper-text"
            type="password"
            value={formData.retypePassword}
            onChange={handleChange}
          />
          <FormHelperText id="retype-password-helper-text">
            Type your password again.
          </FormHelperText>
        </StyledFormControl>

        <StyledFormControl>
          <InputLabel htmlFor="age">Provide your age</InputLabel>
          <Input
            id="age"
            aria-describedby="age-helper-text"
            type="number"
            value={formData.age ?? ''}
            onChange={handleChange}
            inputProps={{
              min: 1,
              max: 100,
            }}
          />
          <FormHelperText id="age-helper-text">We dont share personal details</FormHelperText>
        </StyledFormControl>

        <StyledFormControl>
          {/* <InputLabel htmlFor="age">Provide your Image</InputLabel> */}
          <Input
            id="image"
            aria-describedby="image-helper-text"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <FormHelperText id="image-helper-text">We dont share personal details</FormHelperText>
        </StyledFormControl>

        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <Forms />
    </Container>
  );
};
