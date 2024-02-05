---
title: Table.SingleRow
---

# Table.SingleRow


## Description

ส่งกลับแถวเดียวในตาราง


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

ส่งกลับแถวเดียวในหนึ่งแถว <code>table</code> ถ้า <code>table</code> มีมากกว่าหนึ่งแถว ระบบจะแสดงข้อยกเว้น


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
