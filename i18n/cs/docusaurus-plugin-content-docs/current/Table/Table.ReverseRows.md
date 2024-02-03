---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

Vrátí tabulku s řádky v opačném pořadí.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

Vrátí tabulku s řádky ze vstupu <code>table</code> v opačném pořadí.


## Examples

### Example #1 
Obrátí pořadí řádků v tabulce.
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
