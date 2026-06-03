---
title: Table.SingleRow
---

# Table.SingleRow


ส่งกลับแถวเดียวในตาราง


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

ส่งคืนแถวเดียวในตาราง `table` ที่มีแถวเดียว หาก `table` มีมากกว่าหนึ่งแถว จะเกิดข้อผิดพลาด


## Examples

### Example #1
ส่งคืนแถวเดี่ยวในตาราง
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
