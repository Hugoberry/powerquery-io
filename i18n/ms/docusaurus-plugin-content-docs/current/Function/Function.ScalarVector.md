---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Mencipta fungsi skalar di atas fungsi vektor, menggabungkan pelbagai doa.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Mengembalikan fungsi skalar jenis <code>scalarFunctionType</code> yang memanggil <code>vectorFunction</code> ​​dengan satu baris argumen dan mengembalikan output tunggalnya. Selain itu, apabila fungsi skalar digunakan berulang kali untuk setiap baris jadual input, seperti dalam Table.AddColumn, <code>vectorFunction</code> akan digunakan sekali untuk semua input. <br /><code>vectorFunction</code> akan diberikan jadual yang lajurnya sepadan dengan nama dan kedudukan parameter <code>scalarFunctionType</code>. Setiap baris jadual ini mengandungi argumen untuk satu panggilan ke fungsi skalar, dengan lajur yang sepadan dengan parameter <code>scalarFunctionType</code>. <br /><code>vectorFunction</code> mesti mengembalikan senarai yang panjangnya sama dengan jadual input, itemnya pada setiap kedudukan mestilah hasil yang sama seperti menilai fungsi skalar pada baris input kedudukan yang sama. <br /> Jadual input dijangka akan distrim masuk, maka <code>vectorFunction</code> dijangka akan menstrim outputnya apabila input masuk, hanya mengendalikan satu ketulan input pada satu-satu masa. Secara khususnya, <code>vectorFunction</code> tidak boleh mengangkakan jadual inputnya lebih daripada sekali. <br />



## Category
Function
