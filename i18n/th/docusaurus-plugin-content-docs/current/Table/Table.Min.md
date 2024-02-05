---
title: Table.Min
---

# Table.Min


## Description

ส่งกลับแถวที่เล็กที่สุดหรือค่าเริ่มต้นโดยใช้เกณฑ์ที่กำหนด


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

ส่งกลับแถวที่เล็กที่สุดใน <code>table</code> โดยกำหนดให้มี <code>comparisonCriteria</code> ถ้าตารางว่างเปล่า จะมีการส่งกลับค่าที่เลือกได้ <code>default</code>


## Examples

### Example #1 
ค้นหาแถวที่มีค่าต่ำสุดในคอลัมน์ [a] ในตาราง
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
ค้นหาแถวที่มีค่าต่ำสุดในคอลัมน์ [a] ในตาราง ส่งคืนค่า -1 หากว่างเปล่า
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
