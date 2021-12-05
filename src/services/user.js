const { v4: uuidv4 }  = require('uuid');
const db              = require('../database/database');

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
    const user = db.find(user => user.id == id);
    
    return user;
  }

  deleteById(id) {
    const index = db.findIndex(user => user.id == id);

    db.splice(index, 1);
  }

  findByIdAndPatch(id, data) {
    const user = this.findById(id);

    Object.keys(data).forEach(key => {
      user[key] = data[key];
    })

    return user;
  }

  findByIdAndPut(id, data) {
    const index = db.findIndex(user => user.id == id);
    const user  = data;
    user.id     = id;

    db.splice(index, 1, user);

    return user;
  }
}

module.exports = new UserService();