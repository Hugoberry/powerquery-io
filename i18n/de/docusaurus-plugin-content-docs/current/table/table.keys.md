---
title: Table.Keys
---

# Table.Keys


Gibt die Schlüssel der angegebenen Tabelle zurück.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Gibt die Schlüssel der angegebenen Tabelle zurück.


## Examples

### Example #1 
Rufen Sie die Liste der Schlüssel für eine Tabelle ab.
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
