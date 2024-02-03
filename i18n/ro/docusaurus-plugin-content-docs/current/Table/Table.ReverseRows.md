---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

Returnează un tabel cu rândurile în ordine inversă.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

Returnează un tabel cu rândurile din datele introduse <code>table</code> în ordine inversă.


## Examples

### Example #1 
Inversați rândurile din tabel.
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
