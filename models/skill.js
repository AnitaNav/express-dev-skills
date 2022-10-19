const skills = [
    {id: 125223, skill: 'HTML'},
    {id: 127904, skill: 'CSS'},
    {id: 139608, skill: 'JavaScript'}
  ];
  
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
  
  function getAll() {
    return skills;
  }