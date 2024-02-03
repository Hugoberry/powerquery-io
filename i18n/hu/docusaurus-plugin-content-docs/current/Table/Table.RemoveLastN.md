---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Olyan táblát ad vissza, amelynek eltávolítja az utolsó N sorát.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Olyan táblát ad vissza, amely nem tartalmazza a(z) <code>table</code> tábla utolsó <code>countOrCondition</code> sorát.        Az eltávolított sorok száma a nem kötelező <code>countOrCondition</code> paramétertől függ.    <ul>    <li> Ha a(z) <code>countOrCondition</code> nincs megadva, a függvény csak az utolsó sort távolítja el. </li>    <li> Ha a(z) <code>countOrCondition</code> egy szám, a függvény ennek megfelelő mennyiségű sort távolít el (a végétől kezdve). </li>    <li> Ha a(z) <code>countOrCondition</code> egy feltétel, a függvény a feltételnek megfelelő sorokat eltávolítja addig, amíg olyan sort nem talál, amely nem felel meg a feltételnek.</li>    </ul>


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
Eltávolítja a tábla utolsó sorait, ha a [CustomerID] &gt; 2.
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
