import data from './experience.json';

export const getExperience = () => {
  return data;
};

export default (req, res) => {
  const experience = getExperience();
  res.json(experience);
};
