import React, { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search, X, Palette } from 'lucide-react';
import { getAllColors } from '../mock/teamsData';

const AnimatedSearchBar = ({ onSearch, currentSearch }) => {
  const [searchTerm, setSearchTerm] = useState(currentSearch || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [availableColors] = useState(getAllColors());
  const inputRef = useRef(null);

  useEffect(() => {
    setSearchTerm(currentSearch || '');
  }, [currentSearch]);

  const handleSearch = (value) => {
    setIsSearching(true);
    setSearchTerm(value);
    onSearch(value);
    setShowSuggestions(false);
    setTimeout(() => setIsSearching(false), 500);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const filteredColors = availableColors.filter(color =>
    color.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularColors = ['red', 'blue', 'white', 'black', 'yellow', 'green'];

  return (
    <div className="relative w-full max-w-2xl mx-auto transform opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className={`h-5 w-5 text-gray-400 transition-all duration-300 ${
            isSearching ? 'animate-spin text-blue-500' : 'group-focus-within:text-blue-500'
          }`} />
        </div>
        
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search teams by color (e.g., red, blue, white)..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setShowSuggestions(searchTerm.length > 0)}
          className="pl-12 pr-24 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-500 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl focus:shadow-2xl focus:scale-105 transform"
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-4">
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          
          <Button
            onClick={() => handleSearch(searchTerm)}
            className={`h-10 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
              isSearching ? 'animate-pulse' : ''
            }`}
          >
            <Search className={`h-4 w-4 mr-2 ${isSearching ? 'animate-spin' : ''}`} />
            Search
          </Button>
        </div>
      </div>

      {/* Animated color suggestions dropdown */}
      {showSuggestions && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden opacity-0 translate-y-2 animate-[slideDown_0.3s_ease-out_forwards]">
          <div className="p-4">
            <div className="flex items-center mb-3 opacity-0 animate-[fadeIn_0.4s_ease-out_0.1s_forwards]">
              <Palette className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Available Colors</span>
            </div>
            
            {/* Popular colors */}
            <div className="mb-3 opacity-0 animate-[fadeIn_0.4s_ease-out_0.2s_forwards]">
              <div className="text-xs text-gray-500 mb-2">Popular:</div>
              <div className="flex flex-wrap gap-2">
                {popularColors.map((color, index) => (
                  <Badge
                    key={color}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 capitalize text-xs py-1 px-3 transform hover:scale-105 opacity-0 animate-[slideInLeft_0.4s_ease-out_forwards] hover:shadow-md"
                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                    onClick={() => handleSearch(color)}
                  >
                    <div 
                      className="w-3 h-3 rounded-full mr-2 border border-gray-300 animate-pulse"
                      style={{ backgroundColor: color }}
                    />
                    {color}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Filtered suggestions */}
            {filteredColors.length > 0 && searchTerm && (
              <div className="opacity-0 animate-[fadeIn_0.4s_ease-out_0.4s_forwards]">
                <div className="text-xs text-gray-500 mb-2">Matches:</div>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                  {filteredColors.slice(0, 15).map((color, index) => (
                    <Badge
                      key={color}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 capitalize text-xs py-1 px-3 transform hover:scale-105 opacity-0 animate-[slideInRight_0.4s_ease-out_forwards] hover:shadow-md"
                      style={{ animationDelay: `${0.5 + index * 0.03}s` }}
                      onClick={() => handleSearch(color)}
                    >
                      <div 
                        className="w-3 h-3 rounded-full mr-2 border border-gray-300 animate-pulse"
                        style={{ backgroundColor: color }}
                      />
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Click outside to close suggestions */}
      {showSuggestions && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowSuggestions(false)}
        />
      )}
    </div>
  );
};

export default AnimatedSearchBar;