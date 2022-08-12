const basicInfo = require('./basicInfo');
const components = require('./components');
const routes = require('./routes');

module.exports = {
  ...basicInfo,
  ...routes,
  ...components  
};