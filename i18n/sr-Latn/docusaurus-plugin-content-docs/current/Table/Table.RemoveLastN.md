---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Vraća tabelu sa uklonjenih N redova.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Vraća tabelu koja ne sadrži poslednje <code>countOrCondition</code> redove tabele <code>table</code>.        Broj uklonjenih redova zavisi od opcionalnog parametra <code>countOrCondition</code>.    <ul>    <li> Ako je <code>countOrCondition</code> izostavljen, uklanja se samo prvi red. </li>    <li> Ako je <code>countOrCondition</code> broj, biće uklonjen taj broj redova (počevši od dna). </li>    <li> Ako je <code>countOrCondition</code> uslov, redovi koji ispune uslov će biti uklonjeni dok red ne ispuni uslov.</li>    </ul>


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
Uklanjanje poslednjih redova gde je [IDKupca] &gt; 2 u tabeli.
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
