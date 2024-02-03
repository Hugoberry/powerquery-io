---
title: Table.Buffer
---

# Table.Buffer


## Description

Mem-buffer tabel dalam memori, sehingga mengisolasi dari perubahan eksternal selama evaluasi.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Mem-buffer tabel dalam memori, mengisolasinya dari perubahan eksternal selama evaluasi.    Buffering dangkal. Tindakan ini memaksa evaluasi nilai sel skalar apa pun, namun membiarkan nilai non-skalar (rekaman, daftar, tabel, dan sebagainya) sebagaimana adanya.    <br />    <br />    Catat bahwa menggunakan fungsi ini mungkin atau mungkin tidak akan membuat kueri Anda berjalan lebih cepat. Dalam beberapa kasus, hal ini dapat membuat kueri Anda berjalan lebih lambat karena tambahan     biaya membaca semua data dan menyimpannya di memori, serta fakta bahwa buffering mencegah pelipatan downstream. Jika data tidak perlu    di-buffer, tetapi Anda hanya ingin mencegah pelipatan downstream, gunakan <code>Table.StopFolding</code> sebagai gantinya.


## Examples

### Example #1 
Muat semua baris tabel SQL ke memori, sehingga setiap operasi downstream tidak akan lagi dapat mengkueri server SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
