---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Membuat fungsi skalar di atas fungsi vektor, mengelompokkan beberapa invokasi.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Menghasilkan fungsi skalar tipe <code>scalarFunctionType</code> yang menggunakan <code>vectorFunction</code> dengan baris tunggal argumen dan menghasilkan output tunggal. Selain itu, ketika fungsi skalar berulang kali diterapkan untuk setiap baris pada tabel input, seperti di Table.AddColumn, sebagai gantinya <code>vectorFunction</code> akan diterapkan sekali untuk semua input.<br /><code>vectorFunction</code> akan diberikan tabel yang kolomnya cocok dengan nama dan posisi parameter <code>scalarFunctionType</code>. Setiap baris pada tabel ini berisi argumen untuk satu panggilan ke fungsi skalar, dengan kolom yang sesuai dengan parameter <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> harus menghasilkan daftar dengan panjang yang sama seperti tabel input, dengan item di setiap posisi harus merupakan hasil yang sama seperti mengevaluasi fungsi skalar pada baris input pada posisi yang sama.<br />Tabel input diharapkan akan dialirkan, jadi <code>vectorFunction</code> diharapkan untuk mengalirkan output-nya saat input masuk, hanya bekerja dengan satu gugus input pada satu waktu. Secara khusus, <code>vectorFunction</code> tidak harus menghitung tabel input-nya lebih dari sekali.<br />



## Category
Function
