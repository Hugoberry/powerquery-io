---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


ส่งกลับตารางซึ่งมีแถวจำนวนแรกที่ถูกข้ามไป


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

ส่งกลับตารางที่ไม่มีจำนวนแถวแรกที่ระบุ <code>countOrCondition</code> ของตาราง <code>table</code>    จำนวนของแถวที่เอาออกจะขึ้นอยู่กับพารามิเตอร์ที่เลือกได้ <code>countOrCondition</code>    <ul>    <li> ถ้า <code>countOrCondition</code> ถูกเว้นไว้ จะมีการเอาออกเฉพาะแถวแรก </li>    <li> ถ้า <code>countOrCondition</code> เป็นตัวเลข จะมีการเอาแถวจำนวนมากดังกล่าวออก (เริ่มต้นที่ด้านบน) </li>    <li> ถ้า <code>countOrCondition</code> เป็นเงื่อนไข แถวที่ตรงกับเงื่อนไขจะถูกเอาออกจนกว่าแถวจะไม่เป็นไปตามเงื่อนไข</li>    </ul>


## Examples

### Example #1 
นำแถวแรกของตารางออก
```powerquery
Table.RemoveFirstN(
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
นำสองแถวแรกของตารางออก
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
นำแถวแรกที่ [CustomerID] &lt;=2 ของตารางออก
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
