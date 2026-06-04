---
title: Table.Buffer
---

# Table.Buffer


Mem-buffer tabel dalam memori, sehingga mengisolasi dari perubahan eksternal selama evaluasi.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Mem-buffer tabel dalam memori, mengisolasinya dari perubahan eksternal selama evaluasi. Buffering bersifat dangkal. Ini memaksa evaluasi nilai sel skalar apa pun, tetapi membiarkan nilai non-skalar (rekaman, daftar, tabel, dan sebagainya) tetap seperti semula.

-   `table`: Tabel untuk buffer dalam memori.
-   `options`: (Opsional) Opsi berikut ini mencatat nilai yang dapat digunakan:
    -   `BufferMode`: Mode buffer yang menjelaskan tipe buffering yang akan dilakukan. Opsi ini dapat berupa `BufferMode.Eager` atau `BufferMode.Delayed`.

Menggunakan fungsi ini mungkin membuat kueri berjalan lebih cepat atau lebih lambat. Dalam beberapa kasus, ini bisa memperlambat kueri karena biaya tambahan membaca semua data dan menyimpannya di memori, serta fakta bahwa buffering mencegah pelipatan hilir. Jika data tidak perlu jika data sudah dibuffer, tetapi Anda hanya ingin mencegah penggabungan langkah berikutnya, gunakan `Table.StopFolding` sebagai gantinya.


## Examples

### Example #1
Muat semua baris tabel SQL ke memori, sehingga setiap operasi downstream tidak lagi dapat mengkueri server SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
