import type { Request, Response } from 'express'; 
import { books, findBookById } from '../data/Books.js';
 
export class HomeController { 
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Home"; 

    res.render('home/index', { viewData: viewData });
  } 

  static about(req: Request, res: Response): void { 
    const viewData: { [key: string]: any } = {}; 
    viewData["title"] = "About"; 

     res.render('home/about', { viewData: viewData });
  } 

  static contact(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Contact";

    res.render('home/contact', { viewData: viewData });
  }

  static Main_Point(req: Request, res: any): void { 
    const viewData: any = {}; 
    viewData["books"] = books; 
    
    res.render('home/books', viewData); 
  } 

  static show(req: Request, res: Response): void { 
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      res.status(400).render('home/index', { viewData: { title: 'Invalid book id' } });
      return;
    }

    const book = findBookById(id);

    if (!book) {
      res.status(404).render('home/index', { viewData: { title: 'Book not found' } });
      return;
    }

    res.render('home/show', { book: book }) 
  } 
  
}