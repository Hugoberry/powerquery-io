---
title: Table.Keys
---

# Table.Keys


Retourneert de sleutels van de opgegeven tabel.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Retourneert de sleutels van de opgegeven tabel.


## Examples

### Example #1 
De lijst met sleutels voor een tabel ophalen.
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
