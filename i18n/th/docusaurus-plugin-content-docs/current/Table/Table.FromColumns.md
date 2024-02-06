---
title: Table.FromColumns
---

# Table.FromColumns


สร้างตารางจากรายการของคอลัมน์และค่าที่ระบุ


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Remarks

สร้างตารางชนิด <code>columns</code> จากรายการ <code>lists</code> ซึ่งมีรายการที่ซ้อนกันที่มีชื่อและค่าของคอลัมน์     ถ้าบางคอลัมน์มีค่ามากกว่าคอลัมน์อื่น ค่าที่หายไปจะถูกเติมด้วยค่าเริ่มต้น 'null' ถ้าคอลัมน์ดังกล่าวสามารถเป็น null ได้


## Examples

### Example #1 
ส่งคืนตารางจากรรายการชื่อลูกค้าในรายชื่อ ค่าในรายการรายชื่อลูกค้าแต่ละค่าจะเป็นค่าแถว และรายชื่อแต่ละรายการจะเป็นคอลัมน์
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
สร้างตารางจากรายการคอลัมน์และรายการชื่อคอลัมน์ที่กำหนด
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
สร้างตารางโดยมีจำนวนคอลัมน์ต่อแถวที่แตกต่างกัน ค่าแถวที่หายไปเป็น Null
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
