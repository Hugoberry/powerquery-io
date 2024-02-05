---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

แสดงว่าจะให้ทุกระเบียนที่ระบุปรากฏเป็นแถวในตารางหรือไม่


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

แสดงว่าจะให้ทุกระเบียนที่ระบุในรายการระเบียน <code>rows</code> ปรากฏเป็นแถวใน <code>table</code> หรือไม่    พารามิเตอร์ที่เลือกได้ <code>equationCriteria</code> อาจถูกระบุเพื่อควบคุมการเปรียบเทียบระหว่างแถวของตาราง


## Examples

### Example #1 
กำหนดว่าตารางมีแถวทั้งหมดหรือไม่เมื่อเปรียบเทียบเฉพาะกับคอลัมน์ [CustomerID]
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
กำหนดว่าตารางมีแถวทั้งหมดหรือไม่
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
