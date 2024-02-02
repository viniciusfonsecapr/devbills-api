"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const base_route_1 = require("./base.route");
const categories_route_1 = require("./categories.route");
exports.routes = (0, express_1.Router)();
exports.routes.use('/', base_route_1.baseRoutes);
exports.routes.use('/categories', categories_route_1.categoriesRoutes);