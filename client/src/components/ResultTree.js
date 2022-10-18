import React, { useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import { useDispatch, useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';

const ResultTree = () => {
  const playersChart = {
    name: 'Daniel',
    children: [
      {
        name: 'player',
        children: [
          {
            name: 'player',
            children: [
              {
                name: 'player',
                children: [
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                        children: [
                          {
                            name: 'player',
                          },
                          {
                            name: 'player',
                          },
                        ],
                      },
                      {
                        name: 'player',
                        children: [
                          {
                            name: 'player',
                          },
                          {
                            name: 'player',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'player',
                children: [
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'player',
            children: [
              {
                name: 'player',
                children: [
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'player',
                children: [
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                        children: [
                          {
                            name: 'player',
                          },
                          {
                            name: 'player',
                          },
                        ],
                      },
                      {
                        name: 'player',
                        children: [
                          {
                            name: 'player',
                          },
                          {
                            name: 'player',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'player',
        children: [
          {
            name: 'player',
            children: [
              {
                name: 'player',
                children: [
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'player',
                children: [
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'player',
            children: [
              {
                name: 'player',
                children: [
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                        children: [
                          {
                            name: 'player',
                          },
                          {
                            name: 'player',
                          },
                        ],
                      },
                      {
                        name: 'player',
                        children: [
                          {
                            name: 'player',
                          },
                          {
                            name: 'player',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'player',
                children: [
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                  {
                    name: 'player',
                    children: [
                      {
                        name: 'player',
                      },
                      {
                        name: 'player',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const [node, setNode] = useState(2);
  const componentRef = useRef();
  // const nodeNumber = ['2', '3', '4', '5'];
  const playerNumber = ['≤4', '≤8', '≤16', '≤32'];
  const handleNodeDropdown = (e) => {
    if (e.target.value === '≤4') {
      setNode(2);
    } else if (e.target.value === '≤8') {
      setNode(3);
    } else if (e.target.value === '≤16') {
      setNode(4);
    } else if (e.target.value === '≤32') {
      setNode(5);
    }
  };

  const customNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <foreignObject x='0' height='100px' width='500px' y='-60px'>
        <div className='elemental-node'></div>
      </foreignObject>
    </g>
  );
  return (
    <>
      <ReactToPrint
        trigger={() => {
          return <button>Print</button>;
        }}
        content={() => componentRef.current}
        documentTitle='results'
      />

      <div>
        <select
          name='node-number'
          id='node-number'
          onChange={handleNodeDropdown}
        >
          <option value=''>Number of Players</option>
          {playerNumber.map((num, index) => (
            <option value={num} key={index}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div
        className='result-tree'
        ref={componentRef}
        style={{ width: '100%', height: '50em' }}
      >
        <Tree
          data={playersChart}
          renderCustomNodeElement={(rd3tProps) => customNode({ ...rd3tProps })}
          pathFunc='step'
          collapsible={true}
          zoomable={true}
          initialDepth={node}
          orientation='horizontal'
          // orientation='vertical'
          nodeSize={{ x: 300, y: 105 }}
          hasInteractiveNodes={true}
          separation={{ siblings: 0.5, nonSiblings: 1 }}
          rootNodeClassName='node__root'
          branchNodeClassName='node__branch'
          leafNodeClassName='node__leaf'
        />
      </div>
    </>
  );
};

export default ResultTree;
