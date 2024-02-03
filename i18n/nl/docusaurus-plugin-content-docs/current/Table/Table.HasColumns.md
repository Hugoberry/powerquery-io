---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Geeft aan of de tabel de opgegeven kolom of kolommen bevat.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Geeft aan of de <code>table</code> opgegeven kolom of kolommen, <code>columns</code>, bevat. Retourneert <code>waar</code> als de tabel de kolom of kolommen bevat. Als dat niet het geval is, wordt <code>onwaar</code> geretourneerd.


## Examples

### Example #1 
Bepalen of de tabel de kolom [Name] bevat.
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
Uitzoeken of de tabel de kolommen [Name] en [PhoneNumber] bevat.
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
