---
title: Table.LastN
---

# Table.LastN


ส่งกลับจำนวนแถวล่าสุดที่ระบุ


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

ส่งกลับแถวสุดท้ายจากตาราง `table` โดยขึ้นอยู่กับค่าของ `countOrCondition`:

-   ถ้า `countOrCondition` เป็นตัวเลข จะมีการส่งกลับแถวจำนวนมากดังกล่าวโดยเริ่มจากตำแหน่ง (สิ้นสุด - `countOrCondition`)
-   ถ้า `countOrCondition` เป็นเงื่อนไข แถวที่ตรงกับเงื่อนไขจะถูกส่งกลับในตำแหน่งจากน้อยไปหามากจนกว่าแถวจะไม่เป็นไปตามเงื่อนไข


## Examples

### Example #1
ค้นหาสองแถวสุดท้ายของตาราง
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
ค้นหาแถวสุดท้ายที่ \[a\] > 0 ในตาราง
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
