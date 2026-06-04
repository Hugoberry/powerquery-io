---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Tiek atgriezta tabula, kurā noņemtas pēdējās N rindas.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Atgriež tabulu, kurā nav ietvertas tabulas `table` pēdējās `countOrCondition` rindas. Noņemto rindu skaits ir atkarīgs no neobligātā parametra `countOrCondition`.

-   Ja `countOrCondition` nav norādīts, tiek noņemta tikai pēdējā rinda.
-   Ja `countOrCondition` ir skaitlis, tiek noņemts attiecīgais rindu skaits (sākot no apakšas).
-   Ja `countOrCondition` ir nosacījums, tiek noņemtas nosacījumam atbilstošās rindas, līdz rinda neatbilst nosacījumam.


## Examples

### Example #1
Noņemiet tabulas pēdējo rindu.
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
Noņemiet tabulas pēdējās rindas, kur \[CustomerID\] > 2.
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
