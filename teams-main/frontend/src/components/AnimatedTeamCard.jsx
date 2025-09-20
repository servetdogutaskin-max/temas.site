import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const AnimatedTeamCard = ({ team, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPopularityText = (popularity) => {
    switch (popularity) {
      case 5: return 'Elite';
      case 4: return 'Top Tier';
      case 3: return 'Popular';
      case 2: return 'Rising';
      default: return 'Club';
    }
  };

  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case 5: return 'bg-gradient-to-r from-amber-500 to-orange-600 text-white';
      case 4: return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white';
      case 3: return 'bg-gradient-to-r from-green-500 to-teal-600 text-white';
      case 2: return 'bg-gradient-to-r from-gray-500 to-slate-600 text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div 
      className="opacity-0 transform translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards]"
      style={{ 
        animationDelay: `${index * 0.1}s` 
      }}
    >
      <Card 
        className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md bg-white/90 backdrop-blur-sm overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 transition-all duration-700 ${
          isHovered ? 'from-blue-500/5 via-purple-500/5 to-pink-500/5 scale-110' : ''
        }`} />
        
        {/* Animated border glow */}
        <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
          isHovered ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : ''
        }`} />

        <CardContent className="p-6 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center p-2 transform transition-all duration-300 ${
                isHovered ? 'scale-110 rotate-3 shadow-xl' : ''
              }`}>
                <img 
                  src={team.logo} 
                  alt={`${team.name} logo`}
                  className="w-full h-full object-contain transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/64x64/f0f0f0/666666?text=${team.name.charAt(0)}`;
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold text-gray-900 transition-all duration-300 ${
                  isHovered ? 'text-blue-600 transform translate-x-1' : ''
                }`}>
                  {team.name}
                </h3>
                <div className={`flex items-center text-gray-600 mt-1 transition-all duration-300 ${
                  isHovered ? 'transform translate-x-1' : ''
                }`}>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{team.country}</span>
                </div>
              </div>
            </div>
            <Badge className={`${getPopularityColor(team.popularity)} border-0 font-semibold px-3 py-1 transform transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-2' : ''
            }`}>
              {getPopularityText(team.popularity)}
            </Badge>
          </div>

          <div className="space-y-3">
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isHovered ? 'transform translate-x-1' : ''
            }`}>
              <span className="text-sm font-medium text-gray-700">League:</span>
              <span className="text-sm text-gray-900 font-semibold">{team.league}</span>
            </div>
            
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isHovered ? 'transform translate-x-1' : ''
            }`} style={{ transitionDelay: '50ms' }}>
              <span className="text-sm font-medium text-gray-700">Founded:</span>
              <div className="flex items-center text-sm text-gray-900">
                <Calendar className="w-4 h-4 mr-1" />
                {team.founded}
              </div>
            </div>

            <div className={`flex items-center justify-between transition-all duration-300 ${
              isHovered ? 'transform translate-x-1' : ''
            }`} style={{ transitionDelay: '100ms' }}>
              <span className="text-sm font-medium text-gray-700">Stadium:</span>
              <div className="flex items-center text-sm text-gray-900">
                <Building className="w-4 h-4 mr-1" />
                <span className="truncate max-w-32">{team.stadium}</span>
              </div>
            </div>

            <div className={`pt-2 border-t border-gray-100 transition-all duration-300 ${
              isHovered ? 'transform translate-x-1' : ''
            }`} style={{ transitionDelay: '150ms' }}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Team Colors:</span>
                <div className="flex space-x-2">
                  {team.colors.map((color, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <div 
                        className={`w-4 h-4 rounded-full border-2 border-white shadow-sm transform transition-all duration-300 ${
                          isHovered ? 'scale-125 animate-pulse' : ''
                        }`}
                        style={{ 
                          backgroundColor: color,
                          animationDelay: `${index * 100}ms`
                        }}
                        title={color}
                      />
                      <span className="text-xs text-gray-600 capitalize">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-1000 ${
            isHovered ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-full' : 'translate-x-[-100%]'
          }`} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedTeamCard;