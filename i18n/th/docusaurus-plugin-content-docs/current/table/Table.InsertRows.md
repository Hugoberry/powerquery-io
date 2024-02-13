---
title: Table.InsertRows
---

# Table.InsertRows


แทรกรายการแถวลงในตารางในตำแหน่งที่ระบุ


## Syntax

```powerquery
Table.InsertRows(
    table as table,
    offset as number,
    rows as list
) as table
```


## Remarks

ส่งกลับตารางที่มีรายการแถว <code>rows</code> ซึ่งถูกแทรกลงใน <code>table</code> ในตำแหน่งที่ระบุ <code>offset</code> แต่ละคอลัมน์ในแถวที่จะแทรกต้องตรงกับชนิดคอลัมน์ของตาราง


## Examples

### Example #1 
เพิ่มแถวเข้าในตารางที่ตำแหน่ง 1
```powerquery
Table.InsertRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    1,
    {[CustomerID = 3, Name = "Paul", Phone = "543-7890"]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
เพิ่มสองแถวเข้าในตารางที่ตำแหน่ง 1
```powerquery
Table.InsertRows(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    1,
    {
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }
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




## Category
Table.Row operations
