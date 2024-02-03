---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Skapar en lista med kapslade listor med kolumnvärden från en tabell.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Skapar en lista med kapslade listor från tabellen, <code>table</code>. Varje listpost är en inre lista som innehåller kolumnvärdena.


## Examples

### Example #1 
Skapa en lista med kolumnvärdena från tabellen.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
