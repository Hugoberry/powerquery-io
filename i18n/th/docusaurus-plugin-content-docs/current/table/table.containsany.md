---
title: Table.ContainsAny
---

# Table.ContainsAny


แสดงว่าจะให้ระเบียนใดๆ ที่ระบุปรากฏเป็นแถวในตารางหรือไม่


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

แสดงว่าจะให้ระเบียนใดๆ ที่ระบุในรายการระเบียน `rows` ปรากฏเป็นแถวใน `table` หรือไม่ พารามิเตอร์ที่เลือกได้ `equationCriteria` อาจถูกระบุเพื่อควบคุมการเปรียบเทียบระหว่างแถวของตาราง


## Examples

### Example #1
กำหนดว่าตาราง `({[a = 1, b = 2], [a = 3, b = 4]})` มีแถว `[a = 1, b = 2]` หรือ `[a = 3, b = 5]` หรือไม่
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
กำหนดว่าตาราง `({[a = 1, b = 2], [a = 3, b = 4]})` มีแถว `[a = 1, b = 3]` หรือ `[a = 3, b = 5]` หรือไม่
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
กำหนดว่าตาราง `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` มีแถว `[a = 1, b = 3]` หรือ `[a = 3, b = 5]` หรือไม่โดยเปรียบเทียบเฉพาะคอลัมน์ \[a\]
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
