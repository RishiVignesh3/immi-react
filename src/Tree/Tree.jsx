import { useState } from 'react';
import _ from 'lodash';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to calculate luminance
const luminance = (color) => {
  const rgb = parseInt(color.slice(1), 16);
  const r = ((rgb >> 16) & 0xff) / 255;
  const g = ((rgb >> 8) & 0xff) / 255;
  const b = ((rgb >> 0) & 0xff) / 255;
  const a = [r, g, b].map((value) =>
    value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
  );
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// Function to determine contrasting text color
const getContrastingColor = (bgColor) => {
  return luminance(bgColor) > 0.5 ? '#000000' : '#FFFFFF'; // Light or dark text based on background luminance
};

const ChildTree = ({ node, addChildNode }) => {
  console.log(node.color);
  return (
    <div
      style={{
        cursor: 'pointer',
        margin: '0 15px',
        backgroundColor: node.bgColor,
      }}
    >
      <button
        onClick={() => addChildNode(node.id)}
        style={{ color: node.color, backgroundColor: node.bgColor }}
      >{`Node ${node.id}`}</button>
      <div style={{ display: 'flex', marginTop: '10px', gap: '10px', justifyContent: 'center' }}>
        {node.children.map((childNode) => (
          <ChildTree key={childNode.id} node={childNode} addChildNode={addChildNode} />
        ))}
      </div>
    </div>
  );
};

export const Tree = () => {
  const color = getRandomColor();
  const [tree, setTree] = useState({
    id: 1,
    bgColor: color,
    color: getContrastingColor(color),
    children: [],
  });

  const addChildNode = (id) => {
    const addNode = (node) => {
      if (node.id === id) {
        const color = getRandomColor();
        const newNode = {
          id: parseInt(_.uniqueId()) + 1,
          bgColor: color,
          color: getContrastingColor(color),
          children: [],
        };
        console.log(newNode);
        node.children.push(newNode);
      } else {
        node.children.forEach((childNode) => addNode(childNode));
      }
    };

    const newTree = JSON.parse(JSON.stringify(tree));

    addNode(newTree);
    setTree(newTree);
  };

  return <ChildTree node={tree} addChildNode={addChildNode} />;
};
