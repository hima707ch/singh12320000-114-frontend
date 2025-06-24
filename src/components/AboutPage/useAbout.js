import { useState, useEffect } from 'react';

export const useAbout = () => {
  const [historyData, setHistoryData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [achievementsData, setAchievementsData] = useState({});

  useEffect(() => {
    // Mock data initialization
    // In a real application, this would fetch data from an API
    setHistoryData({
      title: 'Our History',
      content: 'Company history content...'
    });

    setSkillsData({
      title: 'Our Expertise',
      skills: []
    });

    setAchievementsData({
      title: 'Our Achievements',
      achievements: []
    });
  }, []);

  return {
    historyData,
    skillsData,
    achievementsData
  };
};
