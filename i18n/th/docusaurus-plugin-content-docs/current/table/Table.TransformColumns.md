---
title: Table.TransformColumns
---

# Table.TransformColumns


แปลงค่าของคอลัมน์อย่างน้อยหนึ่งคอลัมน์


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

แปลง <code>table</code> โดยนําการดําเนินการแต่ละคอลัมน์ที่แสดงอยู่ใน <code>transformOperations</code> ไปใช้ (โดยที่รูปแบบคือ \{ column name, transformation } หรือ \{ column name, transformation, new column type })    ถ้ามีการระบุ <code>defaultTransformation</code> คอลัมน์นั้นจะถูกนําไปใช้กับคอลัมน์ทั้งหมดที่ไม่ได้แสดงอยู่ใน <code>transformOperations</code>     ถ้าไม่มีคอลัมน์ที่แสดงอยู่ใน <code>transformOperations</code> ข้อยกเว้นจะเกิดขึ้น เว้นแต่ว่าพารามิเตอร์ที่เลือกได้ <code>missingField</code> ระบุทางเลือก (ตัวอย่างเช่น <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>)


## Examples

### Example #1 
แปลงค่าข้อความในคอลัมน์ [A] เป็นค่าตัวเลข และค่าตัวเลขในคอลัมน์ [B] เป็นค่าข้อความ
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
แปลงค่าตัวเลขในคอลัมน์ [X] ที่หายไปเป็นค่าข้อความ โดยไม่สนใจคอลัมน์ที่ไม่มีอยู่
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
แปลงค่าตัวเลขในคอลัมน์ [X] ที่หายไปเป็นค่าข้อความ โดยค่าเริ่มต้นเป็น null ในคอลัมน์ที่ไม่มีอยู่
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
เพิ่มค่าตัวเลขในคอลัมน์ [B] และแปลงเป็นค่าข้อความ และแปลงคอลัมน์อื่นๆ ทั้งหมดเป็นตัวเลข
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
