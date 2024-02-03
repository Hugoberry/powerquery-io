---
title: Table.HasColumns
---

# Table.HasColumns


## Description

menunjukkan sama ada jadual mengandungi lajur yang ditentukan.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Menunjukkan sama ada <code>table</code> mengandungi lajur yang ditentukan, <code>columns</code>. Mengembalikan <code>true</code> jika jadual mengandungi lajur, <code>false</code> jika sebaliknya.


## Examples

### Example #1 
Tentukan sama ada jadual mempunyai lajur [Name].
```powerquery
Table.HasColumns(
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
true
```


### Example #2 
Carikan sama ada jadual mempunyai lajur [Name] dan [PhoneNumber].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
