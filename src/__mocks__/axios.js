const axios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    // Add other axios methods you want to mock (e.g., put, delete)
  };
  
  export default axios;