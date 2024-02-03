---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

Mengembalikan jadual dengan baris dalam tertib terbalik.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

Mengembalikan jadual dengan baris daripada input <code>table</code>, dalam tertib terbalik.


## Examples

### Example #1 
Terbalikkan baris dalam jadual.
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
