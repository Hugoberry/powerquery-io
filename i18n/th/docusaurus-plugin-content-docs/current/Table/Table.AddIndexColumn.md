---
title: Table.AddIndexColumn
---

# Table.AddIndexColumn


เพิ่มคอลัมน์ซึ่งมีค่าตำแหน่งที่ชัดเจน


## Syntax

```powerquery
Table.AddIndexColumn(
    table as table,
    newColumnName as text,
    optional initialValue as number,
    optional increment as number,
    optional columnType as type
) as table
```


## Remarks

เพิ่มคอลัมน์ที่ชื่อ <code>newColumnName</code> เข้ากับ <code>table</code> ด้วยค่าตำแหน่งที่ชัดเจน    ค่าที่เลือกได้ <code>initialValue</code> เป็นค่าดัชนีเริ่มต้น ค่าที่เลือกได้ <code>increment</code> ระบุจำนวนที่จะเพิ่มหน่วยให้กับแต่ละค่าดัชนี


## Examples

### Example #1 
เพิ่มคอลัมน์ดัชนีที่ชื่อ &#34;Index&#34; เข้าในตาราง
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 0],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 1],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 2],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 3]
})
```


### Example #2 
เพิ่มคอลัมน์ดัชนีที่ชื่อ &#34;Index&#34; โดยเริ่มจากค่า 10 และเพิ่มหน่วยทีละ 5 เข้าในตาราง
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index",
    10,
    5
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 10],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 15],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 20],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 25]
})
```




## Category
Table.Transformation
