---
title: Table.AddKey
---

# Table.AddKey


## Description

เพิ่มคีย์ลงในตาราง


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

เพิ่มคีย์ลงใน <code>table</code>ซึ่ง <code>columns</code> เป็นรายการของชื่อคอลัมน์ที่กําหนดคีย์ และ <code>isPrimary</code> ระบุว่าคีย์นั้นเป็นคีย์หลักหรือไม่


## Examples

### Example #1 
เพิ่มคีย์หลักแบบคอลัมน์เดียวลงในตาราง
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
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
