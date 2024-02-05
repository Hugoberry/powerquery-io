---
title: Table.FromRecords
---

# Table.FromRecords


## Description

แปลงรายการระเบียนเป็นตาราง


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

แปลง <code>records</code> ซึ่งเป็นรายการระเบียนให้เป็นตาราง


## Examples

### Example #1 
สร้างตารางจากระเบียน โดยใช้ชื่อเขตข้อมูลระเบียนเป็นชื่อคอลัมน์
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
สร้างตารางจากระเบียนด้วยชนิดคอลัมน์ และเลือกจำนวนคอลัมน์
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```




## Category
Table.Table construction
