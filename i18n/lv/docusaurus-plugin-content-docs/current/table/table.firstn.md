---
title: Table.FirstN
---

# Table.FirstN


Tiek atgrieztas norādītās pirmās skaita rindas.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Tiek atgriezta tabulas `table` pirmā(-s) rinda(-s) atkarībā no `countOrCondition` vērtības:

-   Ja `countOrCondition` ir skaitlis, tiks atgriezts tik daudz rindu (sākot no augšas).
-   Ja `countOrCondition` ir nosacījums, tiks atgrieztas nosacījumam atbilstošās rindas, līdz rinda neatbilst nosacījumam.


## Examples

### Example #1
Atrodiet tabulas pirmās divas rindas.
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
Atrodiet tabulā pirmo rindu, kur \[a\] > 0.
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
