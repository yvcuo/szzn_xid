const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('jyoEhREOex', uuidlib.v4());
	}

module.exports = generateId
