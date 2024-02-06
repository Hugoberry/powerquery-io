---
title: Table.ReplaceKeys
---

# Table.ReplaceKeys


निर्दिष्ट तालिका की कुंजियाँ बदलता है.


## Syntax

```powerquery
Table.ReplaceKeys(
    table as table,
    keys as list
) as table
```


## Remarks

निर्दिष्ट तालिका की कुंजियाँ बदलता है.


## Examples

### Example #1 
तालिका की मौजूदा कुंजियों को बदलें.
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
