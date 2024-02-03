---
title: Table.Column
---

# Table.Column


## Description

Mengembalikan lajur data yang ditentukan daripada jadual sebagai senarai.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Mengembalikan lajur data yang ditentukan oleh <code>column</code> daripada jadual <code>table</code> sebagai senarai.


## Examples

### Example #1 
Mengembalikan nilai dalam lajur [Name] daripada jadual.
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
