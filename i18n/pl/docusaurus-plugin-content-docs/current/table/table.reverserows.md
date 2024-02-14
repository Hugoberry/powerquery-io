---
title: Table.ReverseRows
---

# Table.ReverseRows


Zwraca tabelę z wierszami rozmieszczonymi w odwrotnej kolejności.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Remarks

Zwraca tabelę będącą wynikiem rozmieszczenia wierszy tabeli wejściowej <code>table</code> w odwrotnej kolejności.


## Examples

### Example #1 
Odwróć kolejność wierszy w tabeli.
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
