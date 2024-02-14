---
title: Table.ReverseRows
---

# Table.ReverseRows


Devolve uma tabela com as linhas pela ordem inversa.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Remarks

Devolve uma tabela com as linhas da entrada <code>table</code> em ordem inversa.


## Examples

### Example #1 
Inverter as linhas existentes na tabela.
```powerquery
Table.ReverseRows(
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
Table.FromRecords({
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"]
})
```




## Category
Table.Row operations
