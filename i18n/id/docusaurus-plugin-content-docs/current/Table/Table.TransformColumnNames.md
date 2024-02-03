---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transformasikan nama kolom dengan menggunakan fungsi yang diberikan.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Mengubah nama kolom menggunakan fungsi <code>nameGenerator</code> yang diberikan. Opsi valid:    <div>      <code>MaxLength</code> menentukan panjang maksimum nama kolom baru. Jika fungsi yang diberikan menghasilkan nama kolom yang lebih panjang, nama panjang akan dipotong.    </div>    <div>      <code>Pembanding</code> digunakan untuk mengontrol perbandingan saat membuat nama kolom baru. Pembanding dapat digunakan untuk menyediakan perbandingan yang tidak peka huruf besar/kecil atau perbandingan sadar kultur dan lokal.    </div>    <div>      Pembanding internal berikut ini tersedia dalam bahasa rumus:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Digunakan untuk melakukan perbandingan ordinal akurat</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Digunakan untuk melakukan perbandingan ordinal akurat yang tidak peka huruf besar/kecil</li>      <li> <code>Comparer.FromCulture</code>: Digunakan untuk melakukan perbandingan sadar kultur</li>    </ul>    


## Examples

### Example #1 
Hapus karakter &lt;code&gt;#(tab)&lt;/code&gt; dari nama kolom
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
