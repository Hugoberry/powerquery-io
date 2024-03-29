---
title: Table.ToRows
---

# Table.ToRows


สร้างรายการของรายการที่ซ้อนกันของค่าแถวจากตาราง


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Remarks

สร้างรายการของรายการที่ซ้อนกันจากตาราง <code>table</code>  แต่ละข้อมูลในรายการจะเป็นรายการภายในที่ประกอบด้วยค่าแถว


## Examples

### Example #1 
สร้างรายการค่าแถวจากตาราง
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
