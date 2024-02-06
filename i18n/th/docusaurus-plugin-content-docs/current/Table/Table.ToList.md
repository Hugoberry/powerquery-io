---
title: Table.ToList
---

# Table.ToList


แปลงตารางเป็นรายการโดยนำฟังก์ชันการรวมที่ระบุไปใช้กับแต่ละแถวของค่าในตาราง


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Remarks

แปลงตารางเป็นรายการโดยนำฟังก์ชันการรวมที่ระบุไปใช้กับแต่ละแถวของค่าในตาราง


## Examples

### Example #1 
รวมข้อความของแต่ละแถวด้วยเครื่องหมายจุลภาค
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
