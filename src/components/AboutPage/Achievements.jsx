import React from 'react';

const Achievements = ({ data }) => {
  const achievements = [
    { number: '1000+', title: 'Properties Sold', description: 'Successfully closed deals' },
    { number: '98%', title: 'Client Satisfaction', description: 'Based on customer feedback' },
    { number: '15+', title: 'Years Experience', description: 'In real estate market' },
    { number: '50+', title: 'Expert Agents', description: 'Professional team members' }
  ];

  return (
    <section id="Achievements_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="Achievements_2" className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</h2>
      <div id="Achievements_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <div
            id={`Achievements_${index + 4}`}
            key={achievement.title}
            className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
          >
            <h3 id={`Achievements_${index + 8}`} className="text-3xl font-bold text-blue-600 mb-2">
              {achievement.number}
            </h3>
            <h4 id={`Achievements_${index + 12}`} className="text-xl font-semibold text-gray-900 mb-2">
              {achievement.title}
            </h4>
            <p id={`Achievements_${index + 16}`} className="text-gray-600">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;