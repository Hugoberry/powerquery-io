---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Mengembalikan jadual dengan baris jadual input yang mengandungi ralat dalam sekurang-kurangnya satu sel sahaja. Jika senarai lajur ditentukan, maka hanya sel dalam lajur yang ditentukan diperiksa untuk ralat.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Mengembalikan jadual dengan baris jadual input yang mengandungi ralat dalam sekurang-kurangnya satu sel sahaja. Jika senarai lajur ditentukan, maka hanya sel dalam lajur yang ditentukan diperiksa untuk ralat.


## Examples

### Example #1 
Pilih nama pelanggan dengan ralat dalam barisnya.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
