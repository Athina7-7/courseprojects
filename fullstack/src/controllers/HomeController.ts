import type { Request, Response } from 'express';
import { books } from '../data/books.js';
import { Book } from '../models/Book.js';

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData['title'] = 'Home';

    res.render('home/index', { viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData['title'] = 'About';

    res.render('home/about', { viewData });
  }

  static books(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData['title'] = 'Books';
    viewData['books'] = books;

    res.render('home/books', viewData);
  }

  static show(req: Request, res: Response): void {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).render('home/show', { book: null, error: 'ID inválido.' });
    }

    const book = books.find(item => item.id === id);
    if (!book) {
      return res.status(404).render('home/show', { book: null, error: 'Libro no encontrado.' });
    }

    res.render('home/show', { book });
  }

  static contacts(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData['title'] = 'Contact';

    res.render('home/contact', { viewData });
  }
}
