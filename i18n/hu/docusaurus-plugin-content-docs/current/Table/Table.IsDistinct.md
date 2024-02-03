---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Azt jelzi, hogy a tábla csak különböző sorokat tartalmaz-e (nincsenek-e ismétlődések).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Azt jelzi, hogy a(z) <code>table</code> tábla csak különböző sorokat tartalmaz-e (nincsenek-e ismétlődések). <code>true</code> értéket ad vissza, ha a sorok különbözőek, egyébként <code>false</code> értéket ad.    A választható <code>comparisonCriteria</code> paraméter határozza meg, hogy a tábla mely soraiban ellenőrizze az ismétlődést. Ha a(z) <code>comparisonCriteria</code> nincs megadva, az összes oszlopot ellenőrzi.


## Examples

### Example #1 
Megállapítja, hogy a tábla eltér-e.
```powerquery
Table.IsDistinct(
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
true
```


### Example #2 
Megállapítja, hogy a tábla eltér-e oszlopok tekintetében.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
