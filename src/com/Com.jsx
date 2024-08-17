import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Com() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [pagedData, setPagedData] = useState([]);
  const [previousSearch, setPreviousSearch] = useState([]);
  const [selected, setSelected] = useState(1);
  const totPage = Math.ceil(data.length / 10);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const curSearch = searchParams.get('q');
  console.log(pagedData)

  const fetchData = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.users);
        setPagedData(res.users.slice(0, 10));
        if (inputVal.trim().length) {
          if (previousSearch.length === 5) {
            setPreviousSearch([...previousSearch.slice(1), inputVal.trim()]);
          } else {
            setPreviousSearch([...previousSearch, inputVal.trim()]);
          }
        }
      });
  };

  useEffect(() => {
    // If there is a query parameter in the URL, load the data based on it
    if (curSearch) {
      setInputVal(curSearch);
      fetchData(`https://dummyjson.com/users/search?q=${curSearch}&limit=100`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/search?q=${inputVal}`);
      fetchData(`https://dummyjson.com/users/search?q=${inputVal}&limit=100`);
    }, 1000);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputVal]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const selectPrevHandler = (val) => {
    setInputVal(val);
  };

  const selectPage = (curPage) => {
    setPagedData(data.slice(curPage * 10, curPage * 10 + 10));
    setSelected(curPage + 1);
  };

  const numberElement = () => {
    let num = [];
    for (let i = 0; i < totPage; i++) {
      num.push(
        <button
          onClick={() => selectPage(i)}
          key={i}
          className={`pageButton ${selected === i + 1 ? 'selectedPage' : ''}`}
        >
          {i + 1}
        </button>
      );
    }
    return num;
  };

  return (
    <div className="App">
      {previousSearch.map((item) => (
        <p onClick={() => selectPrevHandler(item)}>{item}</p>
      ))}
      <input value={inputVal} onChange={handleChange} />
      {pagedData.map((item, i) => (
        <p key={i}>{item.firstName} </p>
      ))}
      {numberElement()}
    </div>
  );
}
