---
title: Table.RowCount
---

# Table.RowCount


Devuelve el número de filas de la tabla.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Remarks

Devuelve el número de filas de la <code>table</code>.


## Examples

### Example #1 
Buscar el número de filas de la tabla.
```powerquery
Table.RowCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
