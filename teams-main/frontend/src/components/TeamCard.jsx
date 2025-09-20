import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const TeamCard = ({ team }) => {
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
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center p-2">
              <img 
                src={team.logo} 
                alt={`${team.name} logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/64x64/f0f0f0/666666?text=${team.name.charAt(0)}`;
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {team.name}
              </h3>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{team.country}</span>
              </div>
            </div>
          </div>
          <Badge className={`${getPopularityColor(team.popularity)} border-0 font-semibold px-3 py-1`}>
            {getPopularityText(team.popularity)}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">League:</span>
            <span className="text-sm text-gray-900 font-semibold">{team.league}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Founded:</span>
            <div className="flex items-center text-sm text-gray-900">
              <Calendar className="w-4 h-4 mr-1" />
              {team.founded}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Stadium:</span>
            <div className="flex items-center text-sm text-gray-900">
              <Building className="w-4 h-4 mr-1" />
              <span className="truncate max-w-32">{team.stadium}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Team Colors:</span>
              <div className="flex space-x-2">
                {team.colors.map((color, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    <div 
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                    <span className="text-xs text-gray-600 capitalize">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default TeamCard;