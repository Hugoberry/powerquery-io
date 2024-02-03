---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

Returnerar en tabell med raderna i omvänd ordning.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

Returnerar en tabell med raderna från angivna indata, <code>table</code>, i omvänd ordning.


## Examples

### Example #1 
Byt till omvänd ordning för raderna i tabellen.
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
