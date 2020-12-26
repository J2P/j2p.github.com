export const getClassName = category => {
  let className = category;

  if (category === 'Node.js' || category === 'Vue.js') {
    className = category.replace('.js', '');
  }
  if (category === 'Visual Studio Code') {
    className = category.replace(/ /gi, '');
  }
  if (category === 'dev') {
    className = category.replace('dev', 'dev.to');
  }

  return className;
};

export const getIconCategory = category => {
  let iconCategory = category;

  if (category === 'dev') {
    iconCategory = 'dev.to';
  }

  if (category === 'Book') {
    iconCategory = 'Read the Docs';
  }

  return iconCategory;
};
