---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


Egy táblát ad vissza, amelyben ki van hagyva a megfelelő darabszámú első sor.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Olyan táblát ad vissza, amely nem tartalmazza a(z) `table` tábla megadott számú első sorát (`countOrCondition`). Az eltávolított sorok száma a nem kötelező `countOrCondition` paramétertől függ.

-   Ha a(z) `countOrCondition` nincs megadva, a függvény csak az első sort távolítja el.
-   Ha a(z) `countOrCondition` egy szám, a függvény ennek megfelelő mennyiségű sort távolít el (az elejétől kezdve).
-   Ha a(z) `countOrCondition` egy feltétel, a függvény a feltételnek megfelelő sorokat eltávolítja addig, amíg olyan sort nem talál, amely nem felel meg a feltételnek.


## Examples

### Example #1
Eltávolítja a tábla első sorát.
```powerquery
Table.RemoveFirstN(
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
Eltávolítja a tábla első két sorát.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3
Eltávolítja a tábla első sorait, ha a \[CustomerID\] &lt;=2.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
