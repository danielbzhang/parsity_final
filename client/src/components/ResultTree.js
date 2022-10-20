import React, { useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import { Link, useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

import PlayerCards from './PlayerCards';

const ResultTree = () => {
  const navigate = useNavigate();
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

  const [node, setNode] = useState(1);
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

  const customNode = () => (
    <g>
      <foreignObject x='0' height='100px' width='500px' y='-60px'>
        <div className='elemental-node'></div>
      </foreignObject>
    </g>
  );
  return (
    <>
      <div className='tree-print'>
        <ReactToPrint
          trigger={() => {
            return <button className='btn btn-outline-info'>Print</button>;
          }}
          content={() => componentRef.current}
          documentTitle='results'
        />
      </div>

      <div className='tree-page-header'>
        <div className='tree-dropdown'>
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
        <div className='tree-back'>
          <button
            className='btn btn-outline-secondary'
            onClick={() => navigate('/tours/:id/allplayers')}
          >
            Back
          </button>
        </div>
        <div className='tree-home'>
          <button
            className='btn btn-outline-primary'
            onClick={() => navigate('/api/main')}
          >
            Home
          </button>
        </div>
      </div>
      <div className='tree-playercards'>
        <div
          className='result-tree'
          ref={componentRef}
          style={{ width: '100%', height: '50em' }}
        >
          <Tree
            data={playersChart}
            renderCustomNodeElement={(props) => customNode({ ...props })}
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
        <div>
          <PlayerCards />
        </div>
      </div>
    </>
  );
};

export default ResultTree;
