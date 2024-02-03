---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Visszaadja a tábla egyetlen sorát.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Visszaadja az egyetlen sort az egysoros <code>table</code> táblából. Ha a(z) <code>table</code> tábla egynél több sort tartalmaz, kivételhiba fordul elő.


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
