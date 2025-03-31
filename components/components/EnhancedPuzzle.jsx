// EnhancedPuzzle.jsx
'use client';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// PuzzlePiece component (individual draggable item)
const PuzzlePiece = ({ piece, imageSrc, numPieces, index }) => {
  return (
    <Draggable draggableId={piece.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`relative w-full h-[${100 / numPieces}%] cursor-grab ${
            snapshot.isDragging ? 'shadow-lg' : ''
          }`}
          style={{
            ...provided.draggableProps.style,
            height: `${100 / numPieces}%`,
          }}
        >
          {/* The background image with the specific slice shown */}
          <div 
            className="absolute w-full h-full bg-cover"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: '100% 600%',
              backgroundPosition: `0 ${(piece.id * 100) / (numPieces - 1)}%`,
            }}
          />
          
          {/* Visual indicators for the puzzle piece edges */}
          <div className="absolute top-0 left-0 w-full h-full border border-white/20 hover:border-white/40" />
          
          {/* Position number */}
          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-lg font-bold p-2 rounded-full w-8 h-8 flex items-center justify-center">
            {piece.id + 1}
          </div>
        </div>
      )}
    </Draggable>
  );
};

// Main EnhancedPuzzle component
const EnhancedPuzzle = ({ pieces, imageSrc, numPieces, onDragEnd }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const sourceIndex = result.source.index;
    const targetIndex = result.destination.index;
    
    onDragEnd(sourceIndex, targetIndex);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="puzzle">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="relative w-full h-full"
          >
            {pieces.map((piece, index) => (
              <PuzzlePiece
                key={piece.id}
                piece={piece}
                imageSrc={imageSrc}
                numPieces={numPieces}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default EnhancedPuzzle;