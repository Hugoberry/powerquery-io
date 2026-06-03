---
title: Table.LastN
---

# Table.LastN


Returnerer det sidst angivne antal rækker.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Returnerer den eller de sidste rækker fra tabellen `table`, afhængigt af værdien i `countOrCondition`:

-   Hvis `countOrCondition` er et tal, returneres der så mange rækker med start fra positionen (slut - `countOrCondition`).
-   Hvis `countOrCondition` er en betingelse, returneres de rækker, der overholder betingelsen, i stigende rækkefølge, indtil en række ikke overholder betingelsen.


## Examples

### Example #1
Find de sidste to rækker i tabellen.
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
Find de sidste rækker, hvor \[a\] > 0 i tabellen.
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
