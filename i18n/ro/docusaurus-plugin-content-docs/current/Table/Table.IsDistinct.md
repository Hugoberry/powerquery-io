---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Indică dacă tabelul conține numai rânduri distincte (fără dubluri).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Indică dacă <code>table</code> conține numai rânduri distincte (fără dubluri). Returnează <code>true</code> dacă rândurile sunt distincte; în caz contrar, returnează <code>false</code>.    Un parametru opțional, <code>comparisonCriteria</code>, specifică ce coloane din tabel sunt testate pentru duplicare. Dacă nu se specifică <code>comparisonCriteria</code>, sunt testate toate coloanele.


## Examples

### Example #1 
Determinați dacă tabelul este distinct.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Determinați dacă tabelul este distinct în coloană.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
