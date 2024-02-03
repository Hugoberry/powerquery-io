---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Berdasarkan kolom daftar dalam tabel, membuat salinan baris untuk setiap nilai dalam daftar.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Berdasarkan <code>table</code>, dengan <code>column</code> adalah daftar nilai, membagi daftar menjadi baris untuk setiap nilai. Nilai dalam kolom lain diduplikasi dalam setiap baris baru yang dibuat.


## Examples

### Example #1 
Membagi kolom daftar [Name] dalam tabel.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
