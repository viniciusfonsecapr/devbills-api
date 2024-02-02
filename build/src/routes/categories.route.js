"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const categories_controllers_1 = require("../controllers/categories.controllers");
exports.categoriesRoutes = (0, express_1.Router)();
const controller = new categories_controllers_1.CategoriesController();
exports.categoriesRoutes.get('/', controller.create);
