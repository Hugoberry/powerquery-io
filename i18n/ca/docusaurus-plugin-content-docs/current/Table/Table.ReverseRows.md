---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

Retorna una taula amb les files en l&#39;ordre invers.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

Retorna una taula amb les files a partir de l'entrada <code>table</code> en l'ordre invers.


## Examples

### Example #1 
Inverteix les files a la taula.
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
