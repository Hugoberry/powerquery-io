---
title: Table.Unpivot
---

# Table.Unpivot


## Description

แปลค่าชุดคอลัมน์ในตารางให้เป็นคู่ของแอตทริบิวต์-ค่า


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Details

แปลค่าชุดคอลัมน์ในตารางให้เป็นคู่ของแอตทริบิวต์-ค่า โดยรวมกับค่าที่เหลือในแต่ละแถว


## Examples

### Example #1 
ใช้คอลัมน์ &#34;a&#34;, &#34;b&#34; และ &#34;c&#34; ในตาราง &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; และยกเลิกการทำ ควบคุมการแสดงผลอย่างสั้น ลงในคู่ของแอตทริบิวต์-ค่า
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
