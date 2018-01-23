const chai = require('chai');
const chaiHttp = require('chai-Http');

const {app, runServer, closeServer} = require('../app.js');

const expect = chai.expect;

chai.use(chaiHttp);

