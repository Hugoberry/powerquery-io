---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Angiver, om tabellen kun indeholder entydige rækker (ingen dubletter).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Angiver, om <code>table</code> kun indeholder entydige rækker (ingen dubletter). Returnerer <code>true</code>, hvis rækkerne er entydige. Ellers returneres <code>false</code>.    En valgfri parameter, <code>comparisonCriteria</code>, angiver, hvilke kolonner i tabellen der skal undersøges for dubletter. Hvis <code>comparisonCriteria</code> ikke er angivet, undersøges alle kolonner.


## Examples

### Example #1 
Find ud af, om tabellen er entydig.
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
Find ud af, om tabellen er entydig i kolonnen.
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
