---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformasi nama lajur dengan menggunakan fungsi yang ditentukan.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Mengubah nama lajur menggunakan fungsi `nameGenerator` yang ditentukan. Opsyen yang sah:

`MaxLength` menentukan panjang maksimum nama lajur yang baharu. Jika fungsi yang ditentukan menghasilkan nama lajur yang lebih panjang, nama yang panjang akan dipangkas.

`Comparer` digunakan untuk mengawal perbandingan semasa menjana nama lajur yang baharu. Pembanding boleh digunakan untuk memberikan perbandingan tidak sensitif huruf atau perbandingan sedar budaya dan tempatan.

Pembanding terbina dalam berikut tersedia dalam bahasa formula:

-   `Comparer.Ordinal`: Digunakan untuk melaksanakan perbandingan ordinal yang tepat
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melaksanakan perbandingan tidak sensitif huruf ordinal yang tepat
-   `Comparer.FromCulture`: Digunakan untuk melaksanakan perbandingan sedar budaya


## Examples

### Example #1
Alih keluar aksara `#(tab)` daripada nama lajur
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Mengubah nama lajur untuk menjana nama yang tidak peka huruf dengan panjang 6.
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
