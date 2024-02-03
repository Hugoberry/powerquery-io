---
title: Table.Repeat
---

# Table.Repeat


## Description

ทำซ้ำแถวของตารางตามจำนวนครั้งที่ระบุ


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

ส่งกลับตารางที่มีแถวจากค่าที่ป้อน <code>table</code> ที่ทำซ้ำเป็นจำนวน <code>count</code> ครั้งตามที่ระบุ


## Examples

### Example #1 
ซ้ำแถวในตารางสองครั้ง
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
