---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Menunjukkan apakah tabel berisi kolom yang ditetapkan.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Menunjukkan apakah <code>table</code> berisi kolom yang ditetapkan, <code>columns</code>. Sebaliknya, menghasilkan <code>true</code> jika tabel berisi kolom, <code>false</code>.


## Examples

### Example #1 
Menentukan apakah tabel memiliki kolom [Name].
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
Mencari apakah tabel memiliki kolom [Name] dan [PhoneNumber].
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
