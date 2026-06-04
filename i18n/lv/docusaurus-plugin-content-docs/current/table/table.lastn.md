---
title: Table.LastN
---

# Table.LastN


Tiek atgriezts pēdējais norādītais rindu skaits.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Tiek atgriezta tabulas `table` pēdējā(-s) rinda(-s) atkarībā no `countOrCondition` vērtības:

-   Ja `countOrCondition` ir skaitlis, tiks atgrieztas daudzas rindas, sākot no pozīcijas (beigas — `countOrCondition`).
-   Ja `countOrCondition` ir nosacījums, augošā pozīcijā tiks atgrieztas nosacījumam atbilstošās rindas, līdz rinda neatbilst nosacījumam.


## Examples

### Example #1
Atrodiet tabulas pēdējās divas rindas.
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
Atrodiet tabulā pēdējās rindas, kur \[a\] > 0.
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
