const mcqData = [
  {
    id: 1,
    question: 'What is the command to create a new React application?',
    answers: [
      { value: 'npx create-react-app my-app', isCorrect: true },
      { value: 'npm init react-app my-app', isCorrect: false },
      { value: 'npx init-react-app my-app', isCorrect: false },
      { value: 'npm create-react-app my-app', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'Which method is used to create components in React?',
    answers: [
      { value: 'React.createComponent', isCorrect: false },
      { value: 'React.component', isCorrect: false },
      { value: 'React.createElement', isCorrect: true },
      { value: 'React.makeComponent', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'What is the purpose of a key prop?',
    answers: [
      { value: 'To identify unique elements for React', isCorrect: true },
      { value: 'To change the state of a component', isCorrect: false },
      { value: 'To bind data to a component', isCorrect: false },
      { value: 'To trigger re-renders', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'What is a state in React?',
    answers: [
      { value: 'A permanent storage', isCorrect: false },
      { value: 'An internal data store of a component', isCorrect: true },
      { value: 'A global variable', isCorrect: false },
      { value: 'A method to change props', isCorrect: false },
    ],
  },
  {
    id: 5,
    question: 'How do you pass data from a parent to a child component?',
    answers: [
      { value: 'Using state', isCorrect: false },
      { value: 'Using props', isCorrect: true },
      { value: 'Using context', isCorrect: false },
      { value: 'Using refs', isCorrect: false },
    ],
  },
  {
    id: 6,
    question: 'What is the default port for running a React application?',
    answers: [
      { value: '3000', isCorrect: true },
      { value: '8000', isCorrect: false },
      { value: '8080', isCorrect: false },
      { value: '5000', isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What does the 'setState' method do?",
    answers: [
      { value: 'Updates the state object', isCorrect: true },
      { value: 'Deletes the state object', isCorrect: false },
      { value: 'Renders the component', isCorrect: false },
      { value: 'Changes the component props', isCorrect: false },
    ],
  },
  {
    id: 8,
    question: 'What is the use of the useRef hook?',
    answers: [
      { value: 'To create mutable ref objects', isCorrect: true },
      { value: 'To create state variables', isCorrect: false },
      { value: 'To manage side effects', isCorrect: false },
      { value: 'To perform prop drilling', isCorrect: false },
    ],
  },
  {
    id: 9,
    question: 'Which of the following is used to handle code splitting?',
    answers: [
      { value: 'React.Fragment', isCorrect: false },
      { value: 'React.memo', isCorrect: false },
      { value: 'React.lazy', isCorrect: true },
      { value: 'React.suspense', isCorrect: false },
    ],
  },
  {
    id: 10,
    question:
      'Which lifecycle method is called after the component is rendered for the first time?',
    answers: [
      { value: 'componentDidMount', isCorrect: true },
      { value: 'componentDidUpdate', isCorrect: false },
      { value: 'componentWillUnmount', isCorrect: false },
      { value: 'componentWillMount', isCorrect: false },
    ],
  },
  {
    id: 11,
    question: 'How do you handle events in React?',
    answers: [
      { value: 'Using HTML event handlers', isCorrect: false },
      { value: 'Using inline event handlers', isCorrect: false },
      { value: 'Using JavaScript event handlers', isCorrect: false },
      { value: 'Using React event handlers', isCorrect: true },
    ],
  },
  {
    id: 12,
    question: 'What is the use of the useContext hook?',
    answers: [
      { value: 'To access the context value', isCorrect: true },
      { value: 'To manage state', isCorrect: false },
      { value: 'To handle side effects', isCorrect: false },
      { value: 'To perform code splitting', isCorrect: false },
    ],
  },
  {
    id: 13,
    question: 'What is a pure component?',
    answers: [
      { value: 'A component that re-renders often', isCorrect: false },
      { value: 'A component that never re-renders', isCorrect: false },
      { value: 'A component with shallow comparison of props and state', isCorrect: true },
      { value: 'A component that is a higher-order component', isCorrect: false },
    ],
  },
  {
    id: 14,
    question: 'How can you optimize performance in a React application?',
    answers: [
      { value: 'Using frequent re-renders', isCorrect: false },
      { value: 'Using state in every component', isCorrect: false },
      { value: 'Using memoization techniques', isCorrect: true },
      { value: 'Using inline styles', isCorrect: false },
    ],
  },
  {
    id: 15,
    question: 'What is the purpose of React.Fragment?',
    answers: [
      { value: 'To create new components', isCorrect: false },
      { value: 'To wrap multiple elements without adding extra nodes', isCorrect: true },
      { value: 'To manage state', isCorrect: false },
      { value: 'To handle side effects', isCorrect: false },
    ],
  },
  {
    id: 16,
    question: 'How do you conditionally render a component?',
    answers: [
      { value: 'Using if-else statements', isCorrect: false },
      { value: 'Using switch statements', isCorrect: false },
      { value: 'Using ternary operators', isCorrect: true },
      { value: 'Using for loops', isCorrect: false },
    ],
  },
  {
    id: 17,
    question: 'What is the use of the useReducer hook?',
    answers: [
      { value: 'To manage complex state logic', isCorrect: true },
      { value: 'To manage side effects', isCorrect: false },
      { value: 'To handle context', isCorrect: false },
      { value: 'To access refs', isCorrect: false },
    ],
  },
  {
    id: 18,
    question: "What is the main advantage of React's virtual DOM?",
    answers: [
      { value: 'Directly manipulating the real DOM', isCorrect: false },
      { value: 'Improved performance', isCorrect: true },
      { value: 'Writing less code', isCorrect: false },
      { value: 'Simplifying HTML', isCorrect: false },
    ],
  },
  {
    id: 19,
    question: 'What is the use of the PropTypes library in React?',
    answers: [
      { value: 'To manage component state', isCorrect: false },
      { value: 'To type-check props in components', isCorrect: true },
      { value: 'To handle side effects', isCorrect: false },
      { value: 'To create context', isCorrect: false },
    ],
  },
  {
    id: 20,
    question: 'Which hook is used to manage side effects in functional components?',
    answers: [
      { value: 'useEffect', isCorrect: true },
      { value: 'useState', isCorrect: false },
      { value: 'useContext', isCorrect: false },
      { value: 'useReducer', isCorrect: false },
    ],
  },
];

export default mcqData;
