---
title: Table.Keys
---

# Table.Keys


Returns the keys of the specified table.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Returns the keys of the specified table.


## Examples

### Example #1 
Get the list of keys for a table.
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
