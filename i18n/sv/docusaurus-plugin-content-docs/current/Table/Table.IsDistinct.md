---
title: Table.IsDistinct
---

# Table.IsDistinct


Anger om tabellen bara innehåller distinkta rader (inga dubbletter).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Anger om <code>table</code> bara innehåller distinkta rader (inga dubbletter). Returnerar <code>true</code> om raderna är distinkta. Annars returneras <code>false</code>.    En valfri parameter, <code>comparisonCriteria</code>, anger vilka kolumner i tabellen som testas för duplicering. Om <code>comparisonCriteria</code> inte anges testas alla kolumner.


## Examples

### Example #1 
Kontrollera om tabellen är distinkt.
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
Kontrollera om tabellen är distinkt i kolumnen.
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
