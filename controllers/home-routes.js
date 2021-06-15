const router = require('express').Router();
const sequelize = require('../config/connection');

const { Posts, User, Comment } = require('../models');

