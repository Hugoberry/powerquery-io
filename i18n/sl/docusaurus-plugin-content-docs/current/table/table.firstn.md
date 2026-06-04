---
title: Table.FirstN
---

# Table.FirstN


Vrne prvih"število"vrstic, ki so navedene.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Vrne prve vrstice tabele `table`, odvisno od vrednosti `countOrCondition`:

-   Če je `countOrCondition` število, bo vrnjenih toliko vrstic (z začetkom na vrhu).
-   Če je `countOrCondition` pogoj, bodo vrnjene vrstice, ki izpolnjujejo pogoj, dokler določena vrstica ne izpolnjuje pogoja.


## Examples

### Example #1
Poiščite prvi dve vrstici tabele.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
Poiščite prve vrstice, kjer je \[a\] > 0 v tabeli.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
