export default function TransactionList({ transactions }) {
  return (
    <div>
      <h2 className="text-xl mb-2">Transactions</h2>
      <ul className="list-disc pl-5 mb-4">
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.Student.name} borrowed books on {transaction.borrowDate}
            <ul className="list-disc pl-5">
              {transaction.TransactionDetails.map((detail) => (
                <li key={detail.id}>{detail.Book.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
