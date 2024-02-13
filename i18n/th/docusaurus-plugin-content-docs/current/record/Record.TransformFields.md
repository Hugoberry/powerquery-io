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

ส่งกลับระเบียนหลังจากนำการแปลงที่ระบุในรายการ <code>transformOperations</code> ไปใช้กับ <code>record</code>    คุณสามารถแปลงอย่างน้อยหนึ่งเขตข้อมูลได้ในเวลาที่กำหนด       <div>ในกรณีของเขตข้อมูลเดียวที่มีการแปลงข้อมูลอยู่ <code>transformOperations</code> จะต้องเป็นรายการที่มีสองข้อมูล รายการแรกใน <code>transformOperations</code> ระบุถึงชื่อเขตข้อมูล และรายการที่สองใน <code>transformOperations</code> ระบุถึงฟังก์ชันที่จะใช้สำหรับการแปลง ตัวอย่างเช่น <code>\{"Quantity", Number.FromText}</code></div>      <div>ในกรณีของหลายเขตข้อมูลที่มีการแปลงข้อมูลอยู่ <code>transformOperations</code> จะต้องเป็นรายการหนึ่งในรายการต่างๆ ซึ่งมีแต่ละรายการภายในเป็นคู่ของชื่อเขตข้อมูลและการดำเนินการแปลง ตัวอย่างเช่น <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
แปลงเขตข้อมูล &#34;ราคา&#34; ให้เป็นตัวเลข
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
แปลงเขตข้อมูล &#34;OrderID&#34; และ &#34;Price&#34; เป็นตัวเลข
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
