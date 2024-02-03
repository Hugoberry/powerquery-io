---
title: Table.Keys
---

# Table.Keys


## Description

Mengembalikan kunci bagi jadual yang ditentukan.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Mengembalikan kunci bagi jadual yang ditentukan.


## Examples

### Example #1 
Dapatkan senarai kunci untuk jadual.
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
