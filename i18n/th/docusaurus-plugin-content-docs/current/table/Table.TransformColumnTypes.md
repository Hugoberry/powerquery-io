---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


นำการแปลงชนิดฟอร์ม \{ column, type } ไปใช้โดยใช้ Culture ที่ระบุ


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

ส่งกลับตารางจากค่าที่ป้อน <code>table</code> โดยนำการดำเนินการแปลงไปใช้กับคอลัมน์ที่ระบุในพารามิเตอร์ <code>typeTransformations</code> (ซึ่งมีรูปแบบเป็น \{ column name, type name}) โดยใช้วัฒนธรรมที่ระบุในพารามิเตอร์เพิ่มเติม <code>culture</code> (ตัวอย่างเช่น "en-US")    ถ้าไม่มีคอลัมน์ดังกล่าว ระบบจะแสดงข้อยกเว้น


## Examples

### Example #1 
แปลงค่าตัวเลขในคอลัมน์ [a] เป็นค่าข้อความจากตาราง &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
