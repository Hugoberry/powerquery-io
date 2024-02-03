---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Vraća tabelu sa preskočenim redovima iz prvog prebrojavanja.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Vraća tabelu koja ne sadrži prvi navedeni broj redova <code>countOrCondition</code> tabele <code>table</code>.    Broj uklonjenih redova zavisi od opcionalnog parametra <code>countOrCondition</code>.    <ul>    <li> Ako je <code>countOrCondition</code> izostavljen, uklanja se samo prvi red. </li>    <li> Ako je <code>countOrCondition</code> broj, biće uklonjen taj broj redova (počevši od vrha). </li>    <li> Ako je <code>countOrCondition</code> uslov, redovi koji ispune uslove će biti uklonjeni dok red ne ispuni uslov.</li>    </ul>


## Examples

### Example #1 
Uklanjanje prvog reda tabele.
```powerquery
Table.RemoveFirstN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Uklanjanje prva dva reda tabele.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Uklanjanje prvih redova gde je [IDKupca] &lt;=2 u tabeli.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
