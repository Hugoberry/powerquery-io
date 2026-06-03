---
title: Table.RemoveLastN
---

# Table.RemoveLastN


ส่งกลับตารางที่มีการลบ N แถวสุดท้าย


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

ส่งกลับตารางที่ไม่มี `countOrCondition` แถวสุดท้ายของตาราง `table` จำนวนของแถวที่เอาออกจะขึ้นอยู่กับพารามิเตอร์ที่เลือกได้ `countOrCondition`

-   ถ้า `countOrCondition` ถูกเว้นไว้ จะมีการลบออกเฉพาะแถวสุดท้าย
-   ถ้า `countOrCondition` เป็นตัวเลข จะมีการเอาแถวจำนวนมากดังกล่าวออก (เริ่มต้นที่ด้านล่าง)
-   ถ้า `countOrCondition` เป็นเงื่อนไข แถวที่ตรงกับเงื่อนไขจะถูกเอาออกจนกว่าแถวจะไม่เป็นไปตามเงื่อนไข


## Examples

### Example #1
นำแถวสุดท้ายของตารางออก
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
นำแถวสุดท้ายที่ \[CustomerID\] > 2 ของตารางออก
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
