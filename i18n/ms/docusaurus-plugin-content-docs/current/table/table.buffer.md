---
title: Table.Buffer
---

# Table.Buffer


Menimbal jadual dalam memori, mengasingkannya daripada perubahan luaran semasa penilaian.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Menimbal jadual dalam memori, memisahkannya daripada perubahan luaran semasa penilaian. Penimbalan cetek. Ia memaksa penilaian sebarang nilai sel skalar, tetapi meninggalkan nilai bukan skalar (rekod, senarai, jadual dan sebagainya) seperti ada.

-   `table`: Jadual untuk penimbal dalam memori.
-   `options`: (Pilihan) Nilai rekod opsyen berikut boleh digunakan:
    -   `BufferMode`: Mod penimbal yang menerangkan jenis penimbalan untuk dilaksanakan. Opsyen ini boleh sama ada `BufferMode.Eager` atau `BufferMode.Delayed`.

Menggunakan fungsi ini mungkin atau mungkin tidak menjadikan pertanyaan anda berjalan dengan lebih cepat. Dalam sesetengah kes, pertanyaan anda boleh menjadi lebih perlahan kerana yang ditambah kos membaca semua data dan menyimpannya dalam memori, serta fakta bahawa penimbalan menghalang lipatan hiliran. Jika data tidak perlu penimbal tetapi anda hanya ingin menghalang lipatan hilir, gunakan `Table.StopFolding` sebagai ganti.


## Examples

### Example #1
Muatkan semua baris jadual SQL ke dalam memori, supaya sebarang operasi hiliran tidak lagi dapat bertanya kepada pelayan SQL.
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
