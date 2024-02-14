---
title: Table.Range
---

# Table.Range


ส่งกลับแถวโดยเริ่มต้นที่ออฟเซตที่ระบุ


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Remarks

ส่งกลับแถวจาก <code>table</code> โดยเริ่มต้นที่ <code>offset</code> ที่ระบุ พารามิเตอร์ที่เลือกได้ <code>count</code> ระบุจำนวนแถวที่จะส่งกลับ ตามค่าเริ่มต้น ทุกแถวหลังจากออฟเซตจะถูกส่งกลับ


## Examples

### Example #1 
ส่งคืนแถวทั้งหมดที่เริ่มต้นด้วยออฟเซ็ต 1 ในตาราง
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
ส่งคืนแถวที่เริ่มต้นด้วยออฟเซ็ต 1 ในตาราง
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
