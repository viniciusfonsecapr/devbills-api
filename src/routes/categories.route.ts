import { Router } from 'express';
import { CategoriesController } from '../controllers/categories.controllers';

export const categoriesRoutes = Router();

const controller = new CategoriesController();

categoriesRoutes.get('/', controller.create);
