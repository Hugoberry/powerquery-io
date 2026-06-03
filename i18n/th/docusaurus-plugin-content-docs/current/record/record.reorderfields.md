---
title: Record.ReorderFields
---

# Record.ReorderFields


จัดลําดับเขตข้อมูลบันทึกใหม่เพื่อให้ตรงกับลําดับของรายการชื่อเขตข้อมูล


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

จัดลําดับเขตข้อมูลบันทึกใหม่เพื่อให้ตรงกับลําดับของรายการชื่อเขตข้อมูล

-   `record`: บันทึกที่มีเขตข้อมูลที่จะจัดลําดับใหม่
-   `fieldOrder`: รายการที่มีลําดับใหม่ของเขตข้อมูลที่จะนําไปใช้กับบันทึก ค่าเขตข้อมูลจะถูกเก็บรักษาไว้ และเขตข้อมูลที่ไม่ได้แสดงอยู่ในพารามิเตอร์นี้จะคงอยู่ในตําแหน่งเดิม
-   `missingField`: ระบุการดําเนินการที่คาดไว้สําหรับค่าที่หายไปในแถวที่มีเขตข้อมูลน้อยกว่าที่คาดไว้ ค่าต่อไปนี้ถูกต้อง:
    -   `MissingField.Error`: (ค่าเริ่มต้น) ระบุว่าเขตข้อมูลที่หายไปควรก่อให้เกิดข้อผิดพลาด หากไม่ได้ใส่ค่าใดสําหรับพารามิเตอร์ `missingField` ค่านี้จะถูกใช้
    -   `MissingField.Ignore`: ระบุว่าควรละเว้นเขตข้อมูลที่หายไป
    -   `MissingField.UseNull`: ระบุว่าควรรวมเขตข้อมูลที่หายไปเป็นค่า `null`


## Examples

### Example #1
เรียงลำดับฟิลด์บางฟิลด์ในระเบียนใหม่
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
จัดลําดับบางเขตข้อมูลในบันทึกใหม่ และรวม `null` สําหรับเขตข้อมูลที่หายไปด้วย
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
