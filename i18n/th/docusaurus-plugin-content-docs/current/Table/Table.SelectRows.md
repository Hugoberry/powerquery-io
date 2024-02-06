---
title: Table.SelectRows
---

# Table.SelectRows


เลือกแถวที่ตรงกับฟังก์ชันเงื่อนไข


## Syntax

```powerquery
Table.SelectRows(
    table as table,
    condition as function
) as table
```


## Remarks

ส่งกลับตารางแถวจาก <code>table</code> ที่ตรงกับการเลือก <code>condition</code>


## Examples

### Example #1 
เลือกแถวในตารางซึ่งค่าในคอลัมน์ [CustomerID] มีค่ามากกว่า 2
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] > 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
เลือกแถวในตาราง ซึ่งชื่อไม่ประกอบด้วย &#34;B&#34;
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each not Text.Contains([Name], "B")
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




## Category
Table.Row operations
