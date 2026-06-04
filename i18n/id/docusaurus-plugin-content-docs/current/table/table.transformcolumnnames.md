---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformasikan nama kolom dengan menggunakan fungsi yang diberikan.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Mengubah nama kolom menggunakan fungsi `nameGenerator` yang diberikan. Opsi valid:

`MaxLength` menentukan panjang maksimum nama kolom baru. Jika fungsi yang diberikan menghasilkan nama kolom yang lebih panjang, nama panjang akan dipotong.

`Pembanding` digunakan untuk mengontrol perbandingan saat membuat nama kolom baru. Pembanding dapat digunakan untuk menyediakan perbandingan yang tidak peka huruf besar/kecil atau perbandingan sadar kultur dan lokal.

Pembanding internal berikut ini tersedia dalam bahasa rumus:

-   `Comparer.Ordinal`: Digunakan untuk melakukan perbandingan ordinal akurat
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melakukan perbandingan ordinal akurat yang tidak peka huruf besar/kecil
-   `Comparer.FromCulture`: Digunakan untuk melakukan perbandingan sadar kultur


## Examples

### Example #1
Hapus karakter `#(tab)` dari nama kolom
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Mentransformasi nama kolom untuk membuat nama yang tidak peka huruf besar/kecil dengan panjang 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
