import React, { useState, useMemo } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedSearchBar from './components/AnimatedSearchBar';
import AnimatedTeamCard from './components/AnimatedTeamCard';
import AnimatedStats from './components/AnimatedStats';
import { searchTeamsByColor, footballTeams } from './mock/teamsData';
import { Separator } from './components/ui/separator';
import { Badge } from './components/ui/badge';
import { Trophy, Users, Globe, Search as SearchIcon } from 'lucide-react';

const Home = () => {
  const [searchColor, setSearchColor] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = useMemo(() => {
    return searchTeamsByColor(searchColor);
  }, [searchColor]);

  const handleSearch = (color) => {
    setIsSearching(true);
    setSearchColor(color);
    setTimeout(() => setIsSearching(false), 300);
  };

  const totalTeams = footballTeams.length;
  const eliteTeams = footballTeams.filter(team => team.popularity === 5).length;
  const availableColors = [...new Set(footballTeams.flatMap(team => team.colors))].length;
  const turkishTeams = footballTeams.filter(team => team.country === 'Turkey').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 animated-bg">
      {/* Animated Header */}
      <header className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 sticky top-0 z-30 shadow-lg transform opacity-0 translate-y-[-100%] animate-[slideDown_0.8s_ease-out_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform opacity-0 scale-0 animate-[bounceIn_1s_ease-out_0.2s_forwards] hover:scale-110 transition-all duration-300 float-animation">
                <Trophy className="h-7 w-7 text-white" />
              </div>
              <div className="opacity-0 animate-[slideInRight_0.8s_ease-out_0.4s_forwards]">
                <h1 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                  Football Teams Finder
                </h1>
                <p className="text-sm text-gray-300">Discover teams by their colors</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">{totalTeams} Teams</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                <Globe className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl float-animation"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_forwards]">
            Find Football Teams by
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-3 animate-pulse">
              Color
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
            Search through the world's most popular football teams using their iconic colors. 
            From Real Madrid's royal white to Barcelona's blaugrana.
          </p>

          {/* Animated Search Bar */}
          <div className="mb-8">
            <AnimatedSearchBar onSearch={handleSearch} currentSearch={searchColor} />
          </div>

          {/* Animated Stats */}
          <AnimatedStats 
            eliteTeams={eliteTeams}
            totalTeams={totalTeams}
            availableColors={availableColors}
            turkishTeams={turkishTeams}
          />
        </div>
      </section>

      {/* Animated Results Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Animated Results Header */}
          <div className="flex items-center justify-between mb-8 opacity-0 translate-x-[-50px] animate-[slideInLeft_0.8s_ease-out_0.4s_forwards]">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center">
                <SearchIcon className="w-6 h-6 mr-3 text-blue-400 animate-pulse" />
                {searchColor ? (
                  <>
                    Teams with "{searchColor}" color
                    <Badge className="ml-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 transform animate-[bounceIn_0.6s_ease-out_0.6s_forwards] opacity-0">
                      {searchResults.length} found
                    </Badge>
                  </>
                ) : (
                  'All Football Teams'
                )}
              </h3>
              <p className="text-gray-400 mt-1 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
                {searchColor ? 
                  `Showing teams that feature ${searchColor} in their colors, sorted by popularity` :
                  'Browse all teams sorted by popularity and global recognition'
                }
              </p>
            </div>
          </div>

          <Separator className="mb-8 opacity-0 animate-[slideInRight_0.6s_ease-out_0.6s_forwards]" />

          {/* Animated Loading State */}
          {isSearching && (
            <div className="flex justify-center items-center py-12">
              <div className="relative">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <div className="absolute top-0 left-0 animate-ping rounded-full h-12 w-12 border border-blue-400 opacity-75"></div>
              </div>
            </div>
          )}

          {/* Animated Teams Grid */}
          {!isSearching && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((team, index) => (
                <AnimatedTeamCard key={team.id} team={team} index={index} />
              ))}
            </div>
          )}

          {/* Animated No Results */}
          {!isSearching && searchColor && searchResults.length === 0 && (
            <div className="text-center py-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 float-animation">
                <SearchIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No teams found</h3>
              <p className="text-gray-400 mb-6">
                We couldn't find any teams with "{searchColor}" in their colors.
              </p>
              <button 
                onClick={() => handleSearch('')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Show All Teams
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Animated Footer */}
      <footer className="bg-gray-900/90 border-t border-gray-700 py-8 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Discover football teams from around the world by their iconic colors ⚽
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;