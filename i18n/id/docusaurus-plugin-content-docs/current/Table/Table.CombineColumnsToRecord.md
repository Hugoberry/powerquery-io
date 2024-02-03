---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Menggabungkan kolom yang ditentukan ke kolom bernilai rekor baru dengan setiap catatan yang memiliki nama bidang dan nilai yang sesuai dengan nama kolom dan nilai kolom yang digabungkan.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

Menggabungkan kolom yang ditentukan <code>table</code> ke kolom bernilai rekor baru yang bernama <code>newColumnName</code> di mana setiap catatan memiliki nama dan nilai bidang yang sesuai dengan nama kolom dan nilai dari kolom yang digabungkan. Jika catatan ditetapkan untuk <code>options</code>, opsi berikut dapat diberikan:     <ul>     <li> <code>DisplayNameColumn</code>: Saat ditetapkan sebagai teks, menunjukkan bahwa nama kolom yang diberikan harus diperlakukan sebagai nama tampilan catatan. Ini tidak perlu salah satu kolom dalam data itu sendiri. </li>     <li> <code>TypeName</code>: Saat ditetapkan sebagai teks, memberikan nama jenis logika untuk rekaman yang dihasilkan yang dapat digunakan selama pemuatan data untuk mendorong perilaku oleh lingkungan pemuatan. </li>    </ul>    



## Category
Table.Transformation
