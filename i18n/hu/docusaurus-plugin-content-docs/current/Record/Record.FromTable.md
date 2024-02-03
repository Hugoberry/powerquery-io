---
title: Record.FromTable
---

# Record.FromTable


## Description

Létrehoz egy rekordot egy \{[Name = name, Value = value]} alakú táblából.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Egy rekordot ad vissza rekordok <code>table</code> táblából, amely mezőneveket és értékneveket tartalmaz <code>\{[Name = name, Value = value]}</code> alakban. A függvény kivételt vált ki, ha a mezőnevek nem egyediek.


## Examples

### Example #1 
Létrehoz egy rekordot a Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}) alakú táblából.
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
