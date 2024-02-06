---
title: Table.ColumnNames
---

# Table.ColumnNames


Restituisce i nomi di colonna come elenco.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Restituisce i nomi di colonna nella tabella <code>table</code> come elenco di testo.


## Examples

### Example #1 
Trovare i nomi di colonna della tabella.
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
