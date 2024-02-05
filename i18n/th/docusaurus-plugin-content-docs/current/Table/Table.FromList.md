---
title: Table.FromList
---

# Table.FromList


## Description

แปลงรายการให้เป็นตารางโดยนำฟังก์ชันการแยกที่ระบุไปใช้กับแต่ละข้อมูลในรายการ


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Details

แปลงรายการ <code>list</code> ให้เป็นตารางโดยนำฟังก์ชันการแยกที่เลือกได้ <code>splitter</code> ไปใช้กับแต่ละข้อมูลในรายการ ตามค่าเริ่มต้น จะถือว่ารายการเป็นรายการของค่าข้อความที่ถูกแยกด้วยเครื่องหมายจุลภาค <code>columns</code> ที่เลือกได้อาจเป็นจำนวนคอลัมน์ รายการคอลัมน์ หรือ TableType <code>default</code> และ <code>extraValues</code> ที่เลือกได้อาจถูกระบุไว้ด้วย


## Examples

### Example #1 
สร้างตารางจากรายการโดยใช้ตัวแยกเริ่มต้น
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2 
สร้างตารางจากรายการโดยใช้ตัวแยกแบบกำหนดเอง
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3 
สร้างตารางจากรายการโดยใช้ตัวแยก Record.FieldValues
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
