---
title: Table.Pivot
---

# Table.Pivot


หมุนข้อมูลในคอลัมน์แอตทริบิวต์ให้เป็นส่วนหัวคอลัมน์ โดยกำหนดให้มีคู่ของคอลัมน์ที่แสดงถึงคู่แอตทริบิวต์-ค่า


## Syntax

```powerquery
Table.Pivot(
    table as table,
    pivotValues as list,
    attributeColumn as text,
    valueColumn as text,
    optional aggregationFunction as function
) as table
```


## Remarks

หมุนข้อมูลในคอลัมน์แอตทริบิวต์ให้เป็นส่วนหัวคอลัมน์ โดยกำหนดให้มีคู่ของคอลัมน์ที่แสดงถึงคู่แอตทริบิวต์-ค่า


## Examples

### Example #1 
ใช้ค่า &#34;a&#34;, &#34;b&#34; และ &#34;c&#34; ในคอลัมน์แอตทริบิวต์ของตาราง &lt;code&gt;(\{ [ key = &#34;x&#34;, attribute = &#34;a&#34;, value = 1 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 3 ], [ key = &#34;y&#34;, attribute = &#34;a&#34;, value = 2 ], [ key = &#34;y&#34;, attribute = &#34;b&#34;, value = 4 ] })&lt;/code&gt; และทำ Pivot ลงในคอลัมน์ของตัวเอง
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 3],
    [key = "y", a = 2, b = 4, c = null]
})
```


### Example #2 
ใช้ค่า &#34;a&#34;, &#34;b&#34; และ &#34;c&#34; ในคอลัมน์แอตทริบิวต์ของตาราง &lt;code&gt;(\{ [ key = &#34;x&#34;, attribute = &#34;a&#34;, value = 1 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 3 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 5 ], [ key = &#34;y&#34;, attribute = &#34;a&#34;, value = 2 ], [ key = &#34;y&#34;, attribute = &#34;b&#34;, value = 4 ] })&lt;/code&gt; และทำ Pivot ลงในคอลัมน์ของตัวเอง  แอตทริบิวต์ &#34;c&#34; สำหรับคีย์ &#34;x&#34; มีการเชื่อมโยงกับหลายค่า ดังนั้นให้ใช้ฟังก์ชัน List.Max เพื่อแก้ไขข้อขัดแย้ง
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "x", attribute = "c", value = 5],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value",
    List.Max
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 5],
    [key = "y", a = 2, b = 4, c = null]
})
```




## Category
Table.Column operations
