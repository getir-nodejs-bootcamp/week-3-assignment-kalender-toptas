const { v4: uuidv4 }  = require('uuid');
const db              = require('../db/database');

class UserService {
  save(user) {
    user.id = uuidv4();
    
    db.push(user);
    
    return user;
  }

  findByEmail(email) {
    const user = db.find(user => user.email === email);
    
    return user;
  }

  findById(id) {
    const user = db.find(user => user.id == id); // Double-equal used because type id can be both Number or String.
    
    return user;
  }

  deleteById(id) {
    const index = db.findIndex(user => user.id == id);

    db.splice(index, 1);
  }
}

module.exports = new UserService();