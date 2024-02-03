---
title: Table.Contains
---

# Table.Contains


## Description

แสดงว่าจะให้ระเบียนที่ระบุปรากฏเป็นแถวในตารางหรือไม่


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Details

แสดงว่าจะให้ระเบียนที่ระบุ <code>row</code> ปรากฏเป็นแถวใน <code>table</code> หรือไม่    พารามิเตอร์ที่เลือกได้ <code>equationCriteria</code> อาจถูกระบุเพื่อควบคุมการเปรียบเทียบระหว่างแถวของตาราง


## Examples

### Example #1 
กำหนดว่าตารางมีแถวหรือไม่
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Bob"]
)
```

Result: 
```powerquery
true
```


### Example #2 
กำหนดว่าตารางมีแถวหรือไม่
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Ted"]
)
```

Result: 
```powerquery
false
```


### Example #3 
กำหนดว่าตารางมีแถวหรือไม่เมื่อเปรียบเทียบเฉพาะกับคอลัมน์ [Name]
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [CustomerID = 4, Name = "Bob"],
    "Name"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
