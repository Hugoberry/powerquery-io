---
title: Table.FirstN
---

# Table.FirstN


ส่งกลับแถวจำนวนแรกที่ระบุ


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

ส่งกลับแถวแรกของตาราง `table` โดยขึ้นอยู่กับค่าของ `countOrCondition`:

-   ถ้า `countOrCondition` เป็นตัวเลข จะมีการส่งกลับแถวจำนวนมากดังกล่าว (เริ่มต้นที่ด้านบน)
-   ถ้า `countOrCondition` เป็นเงื่อนไข แถวที่ตรงกับเงื่อนไขจะถูกส่งกลับจนกว่าแถวจะไม่เป็นไปตามเงื่อนไข


## Examples

### Example #1
ค้นหาสองแถวแรกของตาราง
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
ค้นหาแถวแรกที่ \[a\] > 0 ในตาราง
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
