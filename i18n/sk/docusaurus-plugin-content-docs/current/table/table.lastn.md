---
title: Table.LastN
---

# Table.LastN


Vráti posledný zadaný počet riadkov.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Vráti posledné riadky z tabuľky `table` v závislosti od hodnoty `countOrCondition`:

-   Ak `countOrCondition` je číslo, vráti sa taký počet riadkov, počnúc pozíciou (koniec – `countOrCondition`).
-   Ak `countOrCondition` je podmienka, vrátia sa riadky spĺňajúce túto podmienku vo vzostupnom poradí, až kým niektorý riadok podmienku nesplní.


## Examples

### Example #1
Nájdite posledné dva riadky tabuľky.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Nájdite v tabuľke posledné riadky, kde \[a\] > 0.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
