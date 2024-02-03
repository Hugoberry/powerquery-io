---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Menggabungkan lajur yang ditentukan menjadi lajur yang bernilai rekod baru di mana setiap rekod mempunyai nama dan nilai medan yang sepadan dengan nama lajur dan nilai lajur yang telah digabungkan.


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

Menggabungkan lajur <code>table</code> yang ditentukan menjadi lajur yang bernilai rekod baru bernama <code>newColumnName</code> di mana setiap rekod mempunyai nama dan nilai medan yang sepadan dengan nama lajur dan nilai lajur yang telah digabungkan. Jika rekod ditentukan untuk <code>options</code>, pilihan yang berikut mungkin disediakan:    <ul>     <li> <code>DisplayNameColumn</code>: Apabila ditentukan sebagai teks, menunjukkan bahawa nama lajur yang diberikan perlu dianggap sebagai nama paparan rekod. Ini tidak perlu menjadi salah satu lajur dalam rekod itu sendiri.</li>     <li> <code>TypeName</code>: Apabila ditentukan sebagai teks, membekalkan nama jenis logik untuk rekod yang dihasilkan dan ia boleh digunakan semasa pemuatan data bagi memacu tingkah laku oleh persekitaran pemuatan.</li>    </ul>    



## Category
Table.Transformation
