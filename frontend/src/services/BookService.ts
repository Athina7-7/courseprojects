import type { BookInterface } from '@/interfaces/BookInterface'; 
import { useBookStore } from '@/stores/bookstore.js'; 
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js'; 

export class BookService {
  static getBooks(): BookInterface[] {
    return useBookStore().books;
  }

  static getBookById(id: number): BookInterface | undefined {
    return useBookStore().books.find((book) => book.id === id);
  }

  static createBook(book: CreateBookDTO): void {
    const store = useBookStore();
    const id =
      store.books.length > 0 ? Math.max(...store.books.map((book) => book.id)) + 1 : 1;
    store.books.push({ id, ...book });
  }

  static deleteLastBook(): void {
    const store = useBookStore();

    if (store.books.length > 0) {
      store.books.pop();
    }
  }
}
