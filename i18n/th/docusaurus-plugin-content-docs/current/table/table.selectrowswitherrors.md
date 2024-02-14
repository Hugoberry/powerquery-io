---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


ส่งกลับตารางซึ่งมีเฉพาะแถวของตารางค่าที่ป้อนที่มีข้อผิดพลาดในเซลล์อย่างน้อยหนึ่งเซลล์ ถ้าระบุรายการคอลัมน์ จะมีการตรวจสอบหาข้อผิดพลาดเฉพาะเซลล์ในคอลัมน์ที่ระบุ


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

ส่งกลับตารางซึ่งมีเฉพาะแถวของตารางค่าที่ป้อนที่มีข้อผิดพลาดในเซลล์อย่างน้อยหนึ่งเซลล์ ถ้าระบุรายการคอลัมน์ จะมีการตรวจสอบหาข้อผิดพลาดเฉพาะเซลล์ในคอลัมน์ที่ระบุ


## Examples

### Example #1 
เลือกชื่อของลูกค้าที่มีข้อผิดพลาดในแถว
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
