---
title: Table.Max
---

# Table.Max


## Description

ส่งกลับแถวที่ใหญ่ที่สุดหรือค่าเริ่มต้นโดยใช้เกณฑ์ที่กำหนด


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

ส่งกลับแถวที่ใหญ่ที่สุดใน <code>table</code> โดยกำหนดให้มี <code>comparisonCriteria</code> ถ้าตารางว่างเปล่า จะมีการส่งกลับค่าที่เลือกได้ <code>default</code> 


## Examples

### Example #1 
ค้นหาแถวที่มีค่ามากที่สุดในคอลัมน์ [a] ในตาราง &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;
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
ค้นหาแถวที่มีค่ามากที่สุดในคอลัมน์ [a] ในตาราง &lt;code&gt;(\{})&lt;/code&gt; ส่งกลับ -1 ถ้าแถวว่างเปล่า
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
