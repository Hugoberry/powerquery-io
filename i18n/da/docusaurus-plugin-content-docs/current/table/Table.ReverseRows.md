---
title: Table.ReverseRows
---

# Table.ReverseRows


Returnerer en tabel med rækkerne i omvendt rækkefølge.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Remarks

Returnerer en tabel med rækkerne fra inputtet <code>table</code> i omvendt rækkefølge.


## Examples

### Example #1 
Vend om på rækkefølgen af rækkerne i tabellen.
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
