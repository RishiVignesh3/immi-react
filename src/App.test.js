import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mocking fetch
const mockedFetch = jest.mocked(axios.get);

describe('summa', () => {

beforeEach(() => {
  mockedFetch.mockResolvedValue({});
});
// Test for fetch
it('should call fetch and handle the response', () => {
  render(<App />);

  // Use jest.mocked to assert fetch was called
  
   expect(mockedFetch).toHaveBeenCalledWith('https://dummyjson.com/users');
   expect(mockedFetch).toHaveBeenCalledTimes(1);
});
});