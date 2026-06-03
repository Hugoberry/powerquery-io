---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


ขยายคอลัมน์ของระเบียนไปยังคอลัมน์ที่มีค่าแต่ละค่า


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

สร้างตารางที่มีหนึ่งคอลัมน์สำหรับแต่ละเขตข้อมูลในระเบียน โดยกำหนดให้มี `column` ของระเบียนในค่าที่ป้อน `table` หรืออาจเลือกระบุ `newColumnNames` เพื่อให้แน่ใจว่าคอลัมน์ในตารางใหม่จะมีชื่อที่ไม่ซ้ำกัน

-   `table`: ตารางเดิมซึ่งมีคอลัมน์ระเบียนที่จะขยาย
-   `column`: คอลัมน์ที่จะขยาย
-   `fieldNames`: รายการเขตข้อมูลที่จะขยายไปยังคอลัมน์ในตาราง
-   `newColumnNames`: รายการชื่อคอลัมน์ที่จะให้คอลัมน์ใหม่ ชื่อคอลัมน์ใหม่ต้องไม่ซ้ำกับคอลัมน์ใดๆ ในตารางใหม่


## Examples

### Example #1
ขยายคอลัมน์ \[a\] ในตาราง `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` ไปยัง 3 คอลัมน์ "aa", "bb" และ "cc"
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
