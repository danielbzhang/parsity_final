import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PlayerCards = () => {
  const playersToDisplay = useSelector(
    (state) => state.rootReducer.tourOne.players
  );

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [playerdnd, setPlayerdnd] = useState(playersToDisplay);
  // colbyfayock
  const handleDragEnd = (dnd) => {
    if (!dnd.destination) return;
    const player = Array.from(playerdnd);
    const [reorderedPlayer] = player.splice(dnd.source.index, 1);
    player.splice(dnd.destination.index, 0, reorderedPlayer);

    setPlayerdnd(player);
  };

  return (
    <>
      <div className='playercards'>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='playercards-ul'>
            {(provided) => (
              <ul
                className='playercards-ul'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {playerdnd.map((player, index) => (
                  <Draggable
                    key={player._id}
                    draggableId={player._id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className='playercards-list'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {capFirstLetter(player.firstname) +
                          ' ' +
                          capFirstLetter(player.lastname)}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default PlayerCards;
