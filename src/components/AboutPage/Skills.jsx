import React from 'react';

const Skills = ({ data }) => {
  const skillsList = [
    { name: 'Property Management', level: 95 },
    { name: 'Market Analysis', level: 90 },
    { name: 'Customer Service', level: 98 },
    { name: 'Negotiation', level: 92 }
  ];

  return (
    <section id="Skills_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="Skills_2" className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
      <div id="Skills_3" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsList.map((skill, index) => (
          <div id={`Skills_${index + 4}`} key={skill.name} className="space-y-2">
            <div id={`Skills_${index + 8}`} className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
            </div>
            <div id={`Skills_${index + 12}`} className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;