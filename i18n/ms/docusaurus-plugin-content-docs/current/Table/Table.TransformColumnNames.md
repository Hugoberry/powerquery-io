---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transformasi nama lajur dengan menggunakan fungsi yang ditentukan.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Mengubah nama lajur menggunakan fungsi <code>nameGenerator</code> yang ditentukan. Opsyen yang sah:    <div>      <code>MaxLength</code> menentukan panjang maksimum nama lajur yang baharu. Jika fungsi yang ditentukan menghasilkan nama lajur yang lebih panjang, nama yang panjang akan dipangkas.    </div>    <div>      <code>Comparer</code> digunakan untuk mengawal perbandingan semasa menjana nama lajur yang baharu. Pembanding boleh digunakan untuk memberikan perbandingan tidak sensitif huruf atau perbandingan sedar budaya dan tempatan.    </div>    <div>      Pembanding terbina dalam berikut tersedia dalam bahasa formula:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Digunakan untuk melaksanakan perbandingan ordinal yang tepat</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melaksanakan perbandingan tidak sensitif huruf ordinal yang tepat</li>      <li> <code>Comparer.FromCulture</code>: Digunakan untuk melaksanakan perbandingan sedar budaya</li>    </ul>    


## Examples

### Example #1 
Alih keluar aksara &lt;code&gt;#(tab)&lt;/code&gt; daripada nama lajur
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
