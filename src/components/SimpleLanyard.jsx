import React from 'react';

export default function SimpleLanyard() {
  return (
    <div className="fixed bottom-10 right-10 z-20 pointer-events-none">
      {/* Lanyard String */}
      <div className="relative">
        <div className="w-1 h-32 bg-gray-600 mx-auto animate-pulse"></div>
        
        {/* ID Card */}
        <div className="w-24 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-2xl border-2 border-white/20 backdrop-blur-sm animate-bounce">
          <div className="p-2 h-full flex flex-col justify-between">
            <div className="text-white text-xs font-bold text-center">
              DevGeeks
            </div>
            <div className="bg-white/20 rounded p-1">
              <div className="text-white text-xs text-center">ID</div>
            </div>
            <div className="text-white text-xs text-center opacity-80">
              Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}