
var sinon = require('sinon')

module.exports = {
  on: sinon.spy(),
  emit: sinon.spy(),
  client: {
    server: {
      close: sinon.spy()
    }
  }
}
