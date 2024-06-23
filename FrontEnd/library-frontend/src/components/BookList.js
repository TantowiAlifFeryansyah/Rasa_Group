export default function BookList({ books }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl mb-2">Books</h2>
      <ul className="list-disc pl-5 mb-4">
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author} - Stock: {book.stock}</li>
        ))}
      </ul>
    </div>
  );
}
