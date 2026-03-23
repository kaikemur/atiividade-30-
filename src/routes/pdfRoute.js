import express from 'express';
import { relatorioPorId, relatorioTodos } from '../controllers/pdfController.js';

const router = express.Router();

router.get('/pdf', relatorioTodos);
router.get('/:id/pdf', relatorioPorId);

export default router;
