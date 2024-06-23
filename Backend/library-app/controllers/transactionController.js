const { Transaction, TransactionDetail, Book, Student } = require('../models');

exports.createTransaction = async (req, res) => {
  const { studentId, books } = req.body;

  try {
    const student = await Student.findByPk(studentId);
    if (!student || !student.status) {
      return res.status(400).json({ error: 'Mahasiswa tidak aktif' });
    }

    const transaction = await Transaction.create({
      studentId,
      borrowDate: new Date(),
      returnDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    });

    for (const bookId of books) {
      const book = await Book.findByPk(bookId);
      if (book && book.stock > 0) {
        await TransactionDetail.create({ transactionId: transaction.id, bookId });
        book.stock -= 1;
        await book.save();
      } else {
        return res.status(400).json({ error: `Buku dengan ID ${bookId} tidak tersedia` });
      }
    }

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [Student, { model: TransactionDetail, include: [Book] }]
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
