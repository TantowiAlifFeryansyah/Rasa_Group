# Library App

Aplikasi perpustakaan untuk mengelola data buku, mahasiswa, transaksi peminjaman, dan histori peminjaman.

## Fitur

1. **Master Buku**: Menyimpan data buku.
2. **Master Mahasiswa**: Menyimpan data mahasiswa.
3. **Transaksi Peminjaman**: Mahasiswa dapat meminjam lebih dari satu buku dalam satu transaksi.
4. **Inventory**: Mengelola lokasi atau nama rak dari setiap stok buku.
5. **History Peminjaman**: Menampilkan histori peminjaman buku dengan berbagai filter.

## Teknologi yang Digunakan

- **Backend**: Express.js
- **Database**: SQL Server (Express)
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Token)

## Instalasi dan Konfigurasi

1. **Clone Repository**:
   ```sh
   git clone <repository_url>
   cd library-app

2. **Instalasi Dependensi**:
   npm install

3. **Konfigurasi Database**:
   {
  "development": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "library_db",
    "host": "127.0.0.1",
    "dialect": "mssql"
  }
}

4. **Inisialisasi dan Migrasi Database:**:
    npx sequelize db:migrate

5. **Menjalankan Server**:
   npm start


## Menggunakan API dengan Postman

1. **Register User**:
    Method: POST
    URL: http://localhost:3000/api/auth/register
    Body: {"nim": "123456789", "password": "password"}

2. **Login User**:
    Method: POST
    URL: http://localhost:3000/api/auth/login
    Body: {"nim": "123456789", "password": "password"}

3. **Membuat Buku Baru**:
    Method: POST
    URL: http://localhost:3000/api/books
    Body: { "title": "Buku A", "author": "Pengarang A", "stock": 10}

4. **Mendapatkan Daftar Buku**:
    Method: GET
    URL: http://localhost:3000/api/books

5. **Membuat Mahasiswa Baru**:
    Method: POST
    URL: http://localhost:3000/api/students
    Body: { "nim": "123456789", "name": "Mahasiswa A", "status": true}

6. **Mendapatkan Daftar Mahasiswa**:
    Method: GET
    URL: http://localhost:3000/api/students

7. **Membuat Transaksi Peminjaman**:
    Method: POST
    URL: http://localhost:3000/api/transactions
    Body: {"studentId": 1, "books": [1, 2]}

8. **Mendapatkan Daftar Transaksi**:
    Method: GET
    URL: http://localhost:3000/api/transactions

9. **Menambah Stok Buku ke Rak**:
    Method: POST
    URL: http://localhost:3000/api/inventories
    Body: { "bookId": 1, "location": "Rak A"}

10. **Mendapatkan Daftar Inventory**:
    Method: GET
    URL: http://localhost:3000/api/inventories


## Catatan
1. Gunakan header Authorization: Bearer <token> untuk setiap request yang memerlukan autentikasi.
Gantilah <token> de
2. Gantilah <token> dengan token yang didapatkan dari response login.


