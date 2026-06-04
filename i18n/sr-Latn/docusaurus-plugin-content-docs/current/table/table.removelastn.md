---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Vraća tabelu sa uklonjenih N redova.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Vraća tabelu koja ne sadrži poslednje `countOrCondition` redove tabele `table`. Broj uklonjenih redova zavisi od opcionalnog parametra `countOrCondition`.

-   Ako je `countOrCondition` izostavljen, uklanja se samo prvi red.
-   Ako je `countOrCondition` broj, biće uklonjen taj broj redova (počevši od dna).
-   Ako je `countOrCondition` uslov, redovi koji ispune uslov će biti uklonjeni dok red ne ispuni uslov.


## Examples

### Example #1
Uklanjanje poslednjeg reda tabele.
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
Uklanjanje poslednjih redova gde je \[IDKupca\] > 2 u tabeli.
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
