import React from 'react';
import { Badge } from './ui/badge';
import { Trophy, Users, Globe } from 'lucide-react';

const AnimatedStats = ({ eliteTeams, totalTeams, availableColors, turkishTeams }) => {
  const stats = [
    {
      icon: Trophy,
      value: eliteTeams,
      label: "Elite Teams",
      colors: "border-blue-200 bg-blue-50 text-blue-700",
      delay: "0s"
    },
    {
      icon: Users,
      value: totalTeams,
      label: "Total Teams", 
      colors: "border-green-200 bg-green-50 text-green-700",
      delay: "0.1s"
    },
    {
      icon: Globe,
      value: availableColors,
      label: "Colors",
      colors: "border-purple-200 bg-purple-50 text-purple-700", 
      delay: "0.2s"
    },
    {
      icon: null,
      value: turkishTeams,
      label: "Turkish Teams",
      colors: "border-red-200 bg-red-50 text-red-700",
      delay: "0.3s",
      customIcon: "🇹🇷"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {stats.map((stat, index) => (
        <Badge
          key={index}
          variant="outline"
          className={`px-4 py-2 text-sm ${stat.colors} transform opacity-0 translate-y-4 animate-[bounceIn_0.6s_ease-out_forwards] hover:scale-110 transition-all duration-300 cursor-default shadow-sm hover:shadow-md`}
          style={{ animationDelay: stat.delay }}
        >
          {stat.customIcon ? (
            <span className="mr-2 animate-bounce" style={{ animationDelay: stat.delay }}>
              {stat.customIcon}
            </span>
          ) : (
            <stat.icon className="w-4 h-4 mr-2" />
          )}
          <span className="font-semibold animate-pulse" style={{ animationDelay: `calc(${stat.delay} + 0.2s)` }}>
            {stat.value}
          </span>
          <span className="ml-1">{stat.label}</span>
        </Badge>
      ))}
    </div>
  );
};

export default AnimatedStats;