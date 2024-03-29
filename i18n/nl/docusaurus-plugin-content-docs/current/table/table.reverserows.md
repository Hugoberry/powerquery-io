---
title: Table.ReverseRows
---

# Table.ReverseRows


Retourneert een tabel met de rijen in de omgekeerde volgorde.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Remarks

Retourneert een tabel met de rijen vanuit de invoer <code>table</code> in de omgekeerde volgorde.


## Examples

### Example #1 
De rijen in de tabel omkeren.
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
