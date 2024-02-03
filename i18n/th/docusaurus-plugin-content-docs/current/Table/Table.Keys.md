---
title: Table.Keys
---

# Table.Keys


## Description

ส่งกลับคีย์ของตารางที่ระบุ


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

ส่งกลับคีย์ของตารางที่ระบุ


## Examples

### Example #1 
รับรายการของคีย์สําหรับตาราง
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
