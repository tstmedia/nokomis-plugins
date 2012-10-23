
var sinon = require('sinon')

module.exports = {
  setHeader: sinon.spy(),
  end: sinon.spy(),
  on: sinon.spy(),
  emit: sinon.spy()
}
