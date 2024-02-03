---
title: Table.Keys
---

# Table.Keys


## Description

Vráti kľúče zadanej tabuľky.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Vráti kľúče zadanej tabuľky.


## Examples

### Example #1 
Načítajte zoznam kľúčov pre tabuľku.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation
