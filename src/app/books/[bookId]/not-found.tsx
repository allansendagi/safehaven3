// /app/books/[bookId]/not-found.tsx
import Link from 'next/link';

export default function BookNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-4">Book Not Found</h1>
      <p className="text-lg mb-6 text-center">
        Sorry, we couldn't find the book you're looking for.
      </p>
      <Link href="/books" className="btn-primary">
        Browse All Books
      </Link>
    </div>
  );
}