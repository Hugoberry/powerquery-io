---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Olyan táblát ad vissza, amelynek eltávolítja az utolsó N sorát.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Olyan táblát ad vissza, amely nem tartalmazza a(z) `table` tábla utolsó `countOrCondition` sorát. Az eltávolított sorok száma a nem kötelező `countOrCondition` paramétertől függ.

-   Ha a(z) `countOrCondition` nincs megadva, a függvény csak az utolsó sort távolítja el.
-   Ha a(z) `countOrCondition` egy szám, a függvény ennek megfelelő mennyiségű sort távolít el (a végétől kezdve).
-   Ha a(z) `countOrCondition` egy feltétel, a függvény a feltételnek megfelelő sorokat eltávolítja addig, amíg olyan sort nem talál, amely nem felel meg a feltételnek.


## Examples

### Example #1
Eltávolítja a tábla utolsó sorát.
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Eltávolítja a tábla utolsó sorait, ha a \[CustomerID\] > 2.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
