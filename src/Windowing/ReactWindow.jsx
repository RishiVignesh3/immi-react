import React, { useCallback, useState } from 'react';
import { FixedSizeList } from 'react-window';

const data = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);
const hashMap = {};

const Row = React.memo(({ style, index, data }) => {
  return (
    <div style={style}>
      <span onClick={() => data.onDelete(index)}>{data.items[index]}</span>
    </div>
  );
});

export function ReactWindow() {
  const [items, setItems] = useState(data);

  // console.log(items);

  const onDelete = useCallback((i) => {
    setItems((items) => items.filter((_, index) => index !== i));
  }, []);

  const handleInputChange = useCallback((e) => {
    if (!hashMap[e.target.value]) {
      const filteredData = data.filter((item) => item.includes(e.target.value));
      hashMap[e.target.value] = filteredData;
      setItems(filteredData);
    } else {
      console.log('cached');
      setItems(hashMap[e.target.value]);
    }
  }, []);

  return (
    <>
      <input type="number" onChange={handleInputChange} />
      <FixedSizeList
        itemData={{ items, onDelete }}
        width={300}
        height={500}
        itemSize={35}
        itemCount={items.length}
      >
        {Row}
      </FixedSizeList>
    </>
  );
}
