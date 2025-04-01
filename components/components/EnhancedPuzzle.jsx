'use client';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// PuzzlePiece component
const PuzzlePiece = ({ piece, imageSrc, numPieces, index, isCorrect }) => {
  return (
    <Draggable draggableId={piece.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`
            relative w-full transition-all duration-200 ease-in-out
            ${snapshot.isDragging ? 'shadow-xl scale-105 z-10' : 'shadow-md'}
            ${isCorrect ? 'border-green-400' : 'border-gray-300'}
            hover:shadow-lg cursor-grab active:cursor-grabbing
          `}
          style={{
            height: `${100 / numPieces}%`,
            ...provided.draggableProps.style,
          }}
        >
          {/* Background image container */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat overflow-hidden"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: `${100}% ${numPieces * 100}%`,
              backgroundPosition: `0 ${(piece.id * 100) / (numPieces - 1)}%`,
            }}
          >
            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
          
          {/* Edge indicators with subtle glow */}
          <div className={`
            absolute inset-0 border-2 rounded-md
            ${isCorrect ? 'border-green-400/70' : 'border-white/30'}
            hover:border-white/50 transition-colors duration-150
          `} />
          
          {/* Position indicator */}
          <div className={`
            absolute bottom-2 left-2 
            bg-gray-900/80 text-white text-sm font-semibold
            rounded-full w-7 h-7 flex items-center justify-center
            transition-all duration-150
            ${isCorrect ? 'bg-green-500/90' : ''}
          `}>
            {piece.id + 1}
          </div>
          
          {/* Drag state indicator */}
          {snapshot.isDragging && (
            <div className="absolute inset-0 bg-blue-500/20 rounded-md" />
          )}
        </div>
      )}
    </Draggable>
  );
};

// Main EnhancedPuzzle component
const EnhancedPuzzle = ({ pieces, imageSrc, numPieces, onDragEnd }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    onDragEnd(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="puzzle">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="
              relative w-full h-full bg-gray-100 rounded-xl 
              border-2 border-gray-200 overflow-hidden
              shadow-inner p-2
            "
          >
            {/* Puzzle container */}
            <div className="relative w-full h-full bg-white/50 rounded-lg">
              {pieces.map((piece, index) => (
                <PuzzlePiece
                  key={piece.id}
                  piece={piece}
                  imageSrc={imageSrc}
                  numPieces={numPieces}
                  index={index}
                  isCorrect={piece.id === index} // Check if piece is in correct position
                />
              ))}
              {provided.placeholder}
            </div>
            
            {/* Completion overlay */}
            {pieces.every((piece, idx) => piece.id === idx) && (
              <div className="
                absolute inset-0 flex items-center justify-center
                bg-green-500/20 backdrop-blur-sm rounded-xl
                animate-pulse
              ">
                <span className="text-2xl font-bold text-green-700 bg-white/80 px-6 py-2 rounded-lg">
                  Puzzle Completed!
                </span>
              </div>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default EnhancedPuzzle;