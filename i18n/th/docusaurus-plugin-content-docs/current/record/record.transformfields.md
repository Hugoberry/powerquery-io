---
title: Record.TransformFields
---

# Record.TransformFields


ส่งกลับระเบียนหลังจากนำการแปลงที่ระบุไปใช้


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

ส่งกลับระเบียนหลังจากนำการแปลงที่ระบุในรายการ `transformOperations` ไปใช้กับ `record` คุณสามารถแปลงอย่างน้อยหนึ่งเขตข้อมูลได้ในเวลาที่กำหนด

ในกรณีของเขตข้อมูลเดียวที่มีการแปลงข้อมูลอยู่ `transformOperations` จะต้องเป็นรายการที่มีสองข้อมูล รายการแรกใน `transformOperations` ระบุถึงชื่อเขตข้อมูล และรายการที่สองใน `transformOperations` ระบุถึงฟังก์ชันที่จะใช้สำหรับการแปลง ตัวอย่างเช่น `{"Quantity", Number.FromText}`

ในกรณีของหลายเขตข้อมูลที่มีการแปลงข้อมูลอยู่ `transformOperations` จะต้องเป็นรายการหนึ่งในรายการต่างๆ ซึ่งมีแต่ละรายการภายในเป็นคู่ของชื่อเขตข้อมูลและการดำเนินการแปลง ตัวอย่างเช่น `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
แปลงเขตข้อมูล "ราคา" ให้เป็นตัวเลข
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
แปลงเขตข้อมูล "OrderID" และ "Price" เป็นตัวเลข
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
