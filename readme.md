# Phase 2 - Live Code Final

## FairtualBook

Pada kali ini kalian akan membuat sebuah website yang dapat menampilkan list buku, melihat detail buku dan menambahkan komentar pada buku tersebut, semua fitur membutuhkan login

### Summary

- Menggunakan sequelize n postgres
- Memberikan environtment variables jika menggunakan node env
- SPA & Reactive

## Release 0 - Authentication

### Server - Register

- buatlah register sesuai api-doc
- password di hash

### Server - Login

- buatlah login sesuai api-doc

### Client - Login & Logout

- jika sudah login, kalau direfresh tidak harus login lagi
- logout berhasil, localstorage terhapus saat logout
- jika berhasil login, tombol logout muncul, form login ke hide
- Sehabis login, data buku langsung muncul (fetch buku ada di release 1)

## Release 1 - Fetch buku jobs

Jalankan migrasi dan seeding sebelum mengerjakan release ini

### Server

- lakukan fetch buku sesuai api-doc

### Client

- list buku ditampilkan ketika sudah login
- tampilkan sesuai template yang disediakan
- terdapat tombol `show book detail` (lengkapnya di release berikutnya)

## Release 2 - Show book Detail & Comment

### Client

#### bookDetail

- Tampilkan detail buku sesuai buku yang di click
- buku list hilang ketika ke buku detail

#### Comment

- Tampilkan list comment sesuai buku yang di click sesuai template (untuk mengisi data comment lihat release berikutnya)

## Release 3 - POST Comment

### Server

- Lakukan post comment sesuai api-doc

### Client

- Lakukan integrasi form yang ada untuk menambahkan comment
- ketika berhasil menambah comment otomatis list comment juga ikut bertambah
