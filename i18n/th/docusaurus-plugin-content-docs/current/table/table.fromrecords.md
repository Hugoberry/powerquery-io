---
title: Table.FromRecords
---

# Table.FromRecords


แปลงรายการระเบียนเป็นตาราง


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

แปลงรายการข้อมูลที่ระบุให้เป็นตาราง

-   `records`: รายการข้อมูลที่จะแปลงเป็นตาราง
-   `columns`: (ไม่บังคับ) รายชื่อชื่อคอลัมน์ของตาราง หรือประเภทของตาราง
-   `missingField`: (ไม่บังคับ) ระบุวิธีการจัดการกับข้อมูลที่ขาดหายไปในแถว ใช้ค่าใดค่าหนึ่งต่อไปนี้:
    -   `MissingField.Error`: หากกรอกข้อมูลไม่ครบถ้วน จะทำให้เกิดข้อผิดพลาด (ตามค่าเริ่มต้น)
    -   `MissingField.UseNull`: ช่องข้อมูลที่ขาดหายไปจะถูกแทนด้วยค่า `null`
      
    การใช้ `MissingField.Ignore` ในพารามิเตอร์นี้จะทำให้เกิดข้อผิดพลาด


## Examples

### Example #1
สร้างตารางจากระเบียน โดยใช้ชื่อเขตข้อมูลระเบียนเป็นชื่อคอลัมน์
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
สร้างตารางจากระเบียนด้วยชนิดคอลัมน์ และเลือกจำนวนคอลัมน์
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
สร้างตารางที่มีชื่อ ชื่อกลาง และนามสกุลของลูกค้าจากเรกคอร์ดที่ระบุ หากค่าขาดหายไป ให้เปลี่ยนค่าเป็น `null`
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
