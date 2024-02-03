---
title: Table.Column
---

# Table.Column


## Description

Menghasilkan kolom data yang ditetapkan dari tabel sebagai daftar.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Menghasilkan kolom data yang ditetapkan oleh <code>column</code> dari tabel <code>table</code> sebagai daftar.


## Examples

### Example #1 
Menghasilkan nilai dari kolom [Name] dalam tabel.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
