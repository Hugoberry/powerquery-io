---
title: Table.ReplaceKeys
---

# Table.ReplaceKeys


Ersetzt die Schlüssel der angegebenen Tabelle.


## Syntax

```powerquery
Table.ReplaceKeys(
    table as table,
    keys as list
) as table
```


## Remarks

Ersetzt die Schlüssel der angegebenen Tabelle.


## Examples

### Example #1 
Ersetzen Sie die vorhandenen Schlüssel einer Tabelle.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    resultTable = Table.ReplaceKeys(tableWithKeys, {[Columns = {"Id"}, Primary = false]})
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
