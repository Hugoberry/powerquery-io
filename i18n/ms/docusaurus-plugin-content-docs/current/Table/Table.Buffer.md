---
title: Table.Buffer
---

# Table.Buffer


## Description

Menimbal jadual dalam memori, mengasingkannya daripada perubahan luaran semasa penilaian.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Menimbal jadual dalam memori, memisahkannya daripada perubahan luaran semasa penilaian.    Penimbalan adalah cetek. Ia memaksa penilaian sebarang nilai sel skalar, tetapi membiarkan nilai bukan skalar (rekod, senarai, jadual dan sebagainya) seperti adanya.    <br />    <br />    Ambil perhatian bahawa menggunakan fungsi ini mungkin atau mungkin tidak membuat pertanyaan anda berjalan lebih cepat. Dalam sesetengah kes, ia boleh menjadikan pertanyaan anda berfungsi dengan lebih perlahan disebabkan oleh pertambahan  kos membaca semua data dan menyimpannya dalam memori, serta fakta bahawa penimbalan menghalang lipatan hiliran. Jika data tidak perlu     ditimbal tetapi anda hanya ingin menghalang lipatan hiliran, sebaliknya gunakan  <code>Table.StopFolding</code>.


## Examples

### Example #1 
Muatkan semua baris jadual SQL ke dalam memori, supaya sebarang operasi hiliran tidak lagi dapat bertanya pelayan SQL.
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
