---
title: Table.Keys
---

# Table.Keys


## Description

निर्दिष्ट तालिका की कुंजियाँ वापस करता है.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

निर्दिष्ट तालिका की कुंजियाँ वापस करता है.


## Examples

### Example #1 
तालिका के लिए कुंजियों की सूची प्राप्त करें.
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
