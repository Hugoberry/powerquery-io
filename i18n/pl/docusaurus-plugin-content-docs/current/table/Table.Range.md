---
title: Table.Range
---

# Table.Range


Zwraca wiersze, rozpoczynając od określonego przesunięcia.


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Remarks

Zwraca wiersze z tabeli <code>table</code>, rozpoczynając od określonego przesunięcia <code>offset</code>. Opcjonalny parametr <code>count</code> określa, ile wierszy ma zostać zwróconych. Domyślnie zwracane są wszystkie wiersze po danym przesunięciu.


## Examples

### Example #1 
Zwróć wszystkie wiersze, rozpoczynając od przesunięcia 1 w tabeli.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Zwróć jeden wiersz, rozpoczynając od przesunięcia 1 w tabeli.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
