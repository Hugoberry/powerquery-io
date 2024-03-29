---
title: Table.AddColumn
---

# Table.AddColumn


เพิ่มคอลัมน์ซึ่งมีชื่อที่ระบุ ค่าจะคำนวณโดยใช้ฟังก์ชันการเลือกที่ระบุซึ่งใช้แต่ละแถวเป็นค่าที่ป้อน


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Remarks

เพิ่มคอลัมน์ที่ชื่อ <code>newColumnName</code> ลงในตาราง <code>table</code> ค่าสำหรับคอลัมน์จะคำนวณโดยใช้ฟังก์ชันการเลือกที่ระบุ <code>columnGenerator</code> ซึ่งใช้แต่ละแถวเป็นค่าที่ป้อน


## Examples

### Example #1 
เพิ่มคอลัมน์ตัวเลขที่ชื่อ &#34;TotalPrice&#34; เข้าในตาราง โดยมีแต่ละค่าเป็นผลรวมของคอลัมน์ [Price] และ [Shipping]
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
