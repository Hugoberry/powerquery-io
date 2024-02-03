---
title: Table.Skip
---

# Table.Skip


## Description

ส่งกลับตารางซึ่งมีแถวจำนวนแรกที่ถูกข้ามไป


## Syntax

```powerquery
Table.Skip(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

ส่งกลับตารางที่ไม่มีจำนวนแถวแรกที่ระบุ <code>countOrCondition</code> ของตาราง <code>table</code>    จำนวนแถวที่ข้ามโดยขึ้นอยู่กับพารามิเตอร์ที่เลือกได้ <code>countOrCondition</code>    <ul>    <li> ถ้า <code>countOrCondition</code> ถูกเว้นไว้ จะมีการข้ามเฉพาะแถวแรก </li>    <li> ถ้า <code>countOrCondition</code> เป็นตัวเลข จะมีการข้ามแถวจำนวนมากดังกล่าว (เริ่มต้นที่ด้านบน) </li>    <li> ถ้า <code>countOrCondition</code> เป็นเงื่อนไข แถวที่ตรงกับเงื่อนไขจะถูกข้ามจนกว่าแถวจะไม่เป็นไปตามเงื่อนไข</li>    </ul>


## Examples

### Example #1 
ข้ามแถวแรกของตาราง
```powerquery
Table.Skip(
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
ข้ามสองแถวแรกของตาราง
```powerquery
Table.Skip(
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
ข้ามแถวแรกที่ [Price] &gt; 25 ของตาราง
```powerquery
Table.Skip(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0],
        [OrderID = 4, CustomerID = 3, Item = "Fish tazer", Price = 200.0],
        [OrderID = 5, CustomerID = 3, Item = "Bandaids", Price = 2.0],
        [OrderID = 6, CustomerID = 1, Item = "Tackle box", Price = 20.0],
        [OrderID = 7, CustomerID = 5, Item = "Bait", Price = 3.25],
        [OrderID = 8, CustomerID = 5, Item = "Fishing Rod", Price = 100.0],
        [OrderID = 9, CustomerID = 6, Item = "Bait", Price = 3.25]
    }),
    each [Price] > 25
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25],
    [OrderID = 4, CustomerID = 3, Item = "Fish tazer", Price = 200],
    [OrderID = 5, CustomerID = 3, Item = "Bandaids", Price = 2],
    [OrderID = 6, CustomerID = 1, Item = "Tackle box", Price = 20],
    [OrderID = 7, CustomerID = 5, Item = "Bait", Price = 3.25],
    [OrderID = 8, CustomerID = 5, Item = "Fishing Rod", Price = 100],
    [OrderID = 9, CustomerID = 6, Item = "Bait", Price = 3.25]
})
```




## Category
Table.Row operations
