---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Vráti tabuľku s poslednými N odstránenými riadkami.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Vráti tabuľku, ktorá neobsahuje počet posledných riadkov `countOrCondition` tabuľky `table`. Počet odstránených riadkov závisí od voliteľného parametra `countOrCondition`.

-   Ak sa parameter `countOrCondition` vynechá, odstráni sa iba posledný riadok.
-   Ak `countOrCondition` je číslo, odstráni sa taký počet riadkov (počnúc odspodu).
-   Ak `countOrCondition` je podmienka, odstránia sa riadky spĺňajúce túto podmienku, až kým niektorý riadok podmienku nesplní.


## Examples

### Example #1
Odstráňte posledný riadok tabuľky.
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
Odstráňte posledné riadky tabuľky, kde \[CustomerID\] > 2.
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
