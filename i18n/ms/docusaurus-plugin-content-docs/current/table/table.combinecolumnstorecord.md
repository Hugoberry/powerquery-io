---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


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


## Remarks

Menggabungkan lajur `table` yang ditentukan menjadi lajur yang bernilai rekod baru bernama `newColumnName` di mana setiap rekod mempunyai nama dan nilai medan yang sepadan dengan nama lajur dan nilai lajur yang telah digabungkan. Jika rekod ditentukan untuk `options`, pilihan yang berikut mungkin disediakan:

-   `DisplayNameColumn`: Apabila ditentukan sebagai teks, menunjukkan bahawa nama lajur yang diberikan perlu dianggap sebagai nama paparan rekod. Ini tidak perlu menjadi salah satu lajur dalam rekod itu sendiri.
-   `TypeName`: Apabila ditentukan sebagai teks, membekalkan nama jenis logik untuk rekod yang dihasilkan dan ia boleh digunakan semasa pemuatan data bagi memacu tingkah laku oleh persekitaran pemuatan.



## Category
Table.Transformation
