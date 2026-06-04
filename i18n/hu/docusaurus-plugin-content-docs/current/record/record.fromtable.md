---
title: Record.FromTable
---

# Record.FromTable


Létrehoz egy rekordot egy \{\[Name = name, Value = value\]\} alakú táblából.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Egy rekordot ad vissza rekordok `table` táblából, amely mezőneveket és értékneveket tartalmaz `{[Name = name, Value = value]}` alakban. Hibaüzenet jelenik meg, ha a mezőnevek nem egyediek.


## Examples

### Example #1
Létrehoz egy rekordot a Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}) alakú táblából.
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
