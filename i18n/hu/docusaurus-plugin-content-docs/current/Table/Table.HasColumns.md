---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Azt jelzi, hogy a tábla tartalmazza-e a megadott oszlopo(ka)t.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Azt jelzi, hogy a(z) <code>table</code> tábla tartalmazza-e a megadott <code>columns</code> oszlopo(ka)t. <code>true</code> értéket ad vissza, ha a tábla tartalmazza az oszlopo(ka)t, egyébként <code>false</code> értéket ad vissza.


## Examples

### Example #1 
Megállapítja, hogy a tábla tartalmazza-e a [Name] oszlopot.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Ellenőrzi, hogy a tábla tartalmazza-e a [Name] és [PhoneNumber] nevű oszlopokat.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
