---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


แทนที่ค่าที่ผิดพลาดในคอลัมน์ที่ระบุด้วยค่าที่สอดคล้องกันซึ่งระบุไว้


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

แทนที่ค่าที่ผิดพลาดในคอลัมน์ `table` ด้วยค่าใหม่ในรายการ `errorReplacement` รูปแบบของรายการคือ \{\{column1, value1\}, ...\} อาจมีค่าแทนที่เพียงหนึ่งค่าต่อหนึ่งคอลัมน์ การระบุคอลัมน์มากกว่าหนึ่งจะทำให้เกิดข้อผิดพลาด.


## Examples

### Example #1
แทนที่ค่าข้อผิดพลาดด้วยข้อความ "world" ในตาราง
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
แทนที่ค่าข้อผิดพลาดในคอลัมน์ A ด้วยข้อความ "hello" และในคอลัมน์ B ด้วยข้อความ "world" ในตาราง
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
