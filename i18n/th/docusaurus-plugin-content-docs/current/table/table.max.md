---
title: Table.Max
---

# Table.Max


ส่งกลับแถวที่ใหญ่ที่สุดหรือค่าเริ่มต้นโดยใช้เกณฑ์ที่กำหนด


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

ส่งกลับแถวที่ใหญ่ที่สุดใน `table` โดยกำหนดให้มี `comparisonCriteria` ถ้าตารางว่างเปล่า จะมีการส่งกลับค่าที่เลือกได้ `default`


## Examples

### Example #1
ค้นหาแถวที่มีค่ามากที่สุดในคอลัมน์ \[a\] ในตาราง `({[a = 2, b = 4], [a = 6, b = 8]})`
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
ค้นหาแถวที่มีค่ามากที่สุดในคอลัมน์ \[a\] ในตาราง `({})` ส่งกลับ -1 ถ้าแถวว่างเปล่า
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
