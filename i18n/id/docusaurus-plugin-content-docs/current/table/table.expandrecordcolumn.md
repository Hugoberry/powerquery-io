---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Memperluas kolom data menjadi beberapa kolom dengan setiap nilai.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Berdasarkan `column` data dalam input `table`, membuat tabel dengan kolom untuk setiap bidang dalam data. Secara opsional, `newColumnNames` dapat ditetapkan untuk memastikan nama unik kolom dalam tabel baru.

-   `table`: Tabel asli dengan kolom data yang akan diperluas.
-   `column`: Kolom yang akan diperluas.
-   `fieldNames`: Daftar bidang yang akan diperluas menjadi beberapa kolom dalam tabel.
-   `newColumnNames`: Daftar nama kolom yang akan diberikan ke kolom baru. Nama kolom baru tidak dapat menduplikasikan kolom dalam tabel baru.


## Examples

### Example #1
Memperluas kolom \[a\] dalam tabel `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` menjadi 3 kolom "aa", "bb", dan "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
