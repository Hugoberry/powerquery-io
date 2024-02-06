---
title: Table.IsDistinct
---

# Table.IsDistinct


Geeft aan of de tabel alleen unieke rijen (geen duplicaten) bevat.


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Geeft aan of de <code>table</code> alleen unieke rijen (geen duplicaten) bevat. Retourneert <code>true</code> als de rijen uniek zijn. Als er dubbele rijen in de tabel staan, wordt <code>false</code> geretourneerd.    Een optionele parameter <code>comparisonCriteria</code> geeft aan van welke kolommen in de tabel wordt gezocht naar kopieën van die kolommen. Als <code>comparisonCriteria</code> niet is opgegeven, worden alle kolommen getest.


## Examples

### Example #1 
Bepalen of de tabel uniek is.
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
Bepalen of de tabel uniek is in de kolom.
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
