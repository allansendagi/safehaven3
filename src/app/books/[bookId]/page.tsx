// /app/books/[bookId]/page.tsx
import { getBookById } from '@/app/data/books';
import BookPage from '@/app/components/BookPage';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { bookId: string } }) {
  const book = getBookById(params.bookId);
  
  if (!book) {
    return {
      title: 'Book Not Found',
      description: 'The requested book could not be found'
    };
  }
  
  return {
    title: `${book.title} by ${book.author}`,
    description: book.description,
    openGraph: {
      images: [book.coverImage],
    },
  };
}

export default function BookDetailPage({ params }: { params: { bookId: string } }) {
  const book = getBookById(params.bookId);
  
  if (!book) {
    notFound();
  }
  
  return <BookPage book={book} />;
}

// Generate static paths for all books
export async function generateStaticParams() {
  // Import directly here to avoid circular dependencies
  const { books } = require('@/app/data/books');
  
  return books.map((book: any) => ({
    bookId: book.id,
  }));
}