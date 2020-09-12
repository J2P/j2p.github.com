export const getClassName = (category) => {
  let className = category;

  if (category === 'Node.js' || category === 'Vue.js') {
    className = category.replace('.js', '');
  }
  if (category === 'Visual Studio Code') {
    className = category.replace(/ /gi, '');
  }
  
  return className;
}