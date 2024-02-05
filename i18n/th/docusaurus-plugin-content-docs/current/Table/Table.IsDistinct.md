---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

ระบุว่าตารางมีเฉพาะแถวที่กำหนดไว้ (ไม่ซ้ำซ้อน) หรือไม่


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

ระบุว่า <code>table</code> มีเฉพาะแถวที่ไม่ซ้ำ (ไม่ซ้ำซ้อน) หรือไม่ ส่งคืน <code>true</code> หากแถวไม่ซ้ำกัน และ <code>false</code> หากผลลัพธ์เป็นอื่น    พารามิเตอร์ทางเลือก <code>comparisonCriteria</code> ระบุว่าจะมีการทดสอบความซ้ำซ้อนที่คอลัมน์ใดของตาราง หากไม่มีการระบุ <code>comparisonCriteria</code> จะมีการทดสอบคอลัมน์ทั้งหมด


## Examples

### Example #1 
กำหนดว่าตารางมีค่าเฉพาะหรือไม่
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
กำหนดว่าตารางมีค่าคอลัมน์เฉพาะหรือไม่
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
