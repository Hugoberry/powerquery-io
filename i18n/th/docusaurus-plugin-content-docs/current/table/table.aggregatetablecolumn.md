---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


รวมคอลัมน์ของตารางให้เป็นหลายคอลัมน์ในตารางที่มี


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

รวมตารางใน `table`\[`column`\] ให้เป็นหลายตารางที่มีค่าการรวมสำหรับตารางต่างๆ `aggregations` จะใช้เพื่อระบุคอลัมน์ซึ่งมีตารางที่จะรวม ฟังก์ชันการรวมที่จะนำไปใช้กับตารางเพื่อสร้างค่าของตาราง และชื่อของคอลัมน์การรวมที่จะสร้าง


## Examples

### Example #1
รวมคอลัมน์ตารางใน `[t]` ในตาราง `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` ให้เป็นผลรวมของ `[t.a]` ค่าต่ำสุดและสูงสุดของ `[t.b]` และจำนวนค่าใน `[t.a]`
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
