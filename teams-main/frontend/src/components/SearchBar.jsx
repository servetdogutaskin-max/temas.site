import React, { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search, X, Palette } from 'lucide-react';
import { getAllColors } from '../mock/teamsData';

const SearchBar = ({ onSearch, currentSearch }) => {
  const [searchTerm, setSearchTerm] = useState(currentSearch || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [availableColors] = useState(getAllColors());
  const inputRef = useRef(null);

  useEffect(() => {
    setSearchTerm(currentSearch || '');
  }, [currentSearch]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value);
    setShowSuggestions(false);
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
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search teams by color (e.g., red, blue, white)..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setShowSuggestions(searchTerm.length > 0)}
          className="pl-12 pr-24 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 shadow-lg bg-white/90 backdrop-blur-sm"
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-4">
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4 text-gray-400" />
            </Button>
          )}
          
          <Button
            onClick={() => handleSearch(searchTerm)}
            className="h-10 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Color suggestions dropdown */}
      {showSuggestions && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Palette className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Available Colors</span>
            </div>
            
            {/* Popular colors */}
            <div className="mb-3">
              <div className="text-xs text-gray-500 mb-2">Popular:</div>
              <div className="flex flex-wrap gap-2">
                {popularColors.map((color) => (
                  <Badge
                    key={color}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors capitalize text-xs py-1 px-3"
                    onClick={() => handleSearch(color)}
                  >
                    <div 
                      className="w-3 h-3 rounded-full mr-2 border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                    {color}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Filtered suggestions */}
            {filteredColors.length > 0 && searchTerm && (
              <div>
                <div className="text-xs text-gray-500 mb-2">Matches:</div>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                  {filteredColors.slice(0, 15).map((color) => (
                    <Badge
                      key={color}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors capitalize text-xs py-1 px-3"
                      onClick={() => handleSearch(color)}
                    >
                      <div 
                        className="w-3 h-3 rounded-full mr-2 border border-gray-300"
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

export default SearchBar;