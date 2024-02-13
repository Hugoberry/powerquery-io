---
title: Table.ReorderColumns
---

# Table.ReorderColumns


ส่งกลับตารางที่มีคอลัมน์ในลำดับที่ระบุ


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

ส่งกลับตารางจากค่าที่ป้อน <code>table</code> ที่มีคอลัมน์ในลำดับที่ระบุโดย <code>columnOrder</code> คอลัมน์ที่ไม่ถูกระบุในรายการจะไม่ได้รับการจัดลำดับใหม่     ถ้าไม่มีคอลัมน์อยู่ ระบบจะแสดงข้อยกเว้น เว้นแต่พารามิเตอร์ที่เลือกได้ <code>missingField</code> จะระบุค่าสำรอง (เช่น <code>MissingField.UseNull</code> หรือ <code>MissingField.Ignore</code>)


## Examples

### Example #1 
สลับเปลี่ยนลำดับของคอลัมน์ [Phone] และ [Name] ในตาราง
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
สลับเปลี่ยนลำดับของคอลัมน์ [Phone] และ [Address] หรือใช้ &#34;MissingField.Ignore&#34; ในตาราง โดยจะไม่มีการเปลี่ยนแปลงตาราง เนื่องจากไม่มีคอลัมน์ [Address] อยู่
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
