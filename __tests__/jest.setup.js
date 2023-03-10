jest.setTimeout(30000)
require("../models/User");

const mongoose = require("mongoose");
const keys = require("../config/keys");
const jestConfig = require("../jest.config");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});