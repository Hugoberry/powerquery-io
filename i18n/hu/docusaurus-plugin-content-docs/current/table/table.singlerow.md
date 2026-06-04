---
title: Table.SingleRow
---

# Table.SingleRow


Visszaadja a tábla egyetlen sorát.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Visszaadja az egyetlen sort az egysoros `table` táblából. Ha a(z) `table` tábla egynél több sort tartalmaz, hibaüzenet jelenik meg.


## Examples

### Example #1
Egy sort ad vissza a táblában.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
