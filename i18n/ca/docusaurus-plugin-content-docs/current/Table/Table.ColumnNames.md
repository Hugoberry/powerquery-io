---
title: Table.ColumnNames
---

# Table.ColumnNames


## Description

Retorna els noms de columna com una llista.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Details

Retorna els noms de columna de la taula <code>table</code> com una llista de text.


## Examples

### Example #1 
Cerca els noms de columna de la taula.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
