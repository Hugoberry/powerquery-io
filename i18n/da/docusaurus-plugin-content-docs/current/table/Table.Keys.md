---
title: Table.Keys
---

# Table.Keys


Returnerer nøglerne til den angivne tabel.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Returnerer nøglerne til den angivne tabel.


## Examples

### Example #1 
Hent listen over nøgler til en tabel.
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
