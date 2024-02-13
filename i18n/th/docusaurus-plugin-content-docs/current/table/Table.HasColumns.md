---
title: Table.HasColumns
---

# Table.HasColumns


ระบุว่าตารางมีคอลัมน์ที่ระบุหรือไม่


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

ระบุว่า <code>table</code> มีคอลัมน์ที่ระบุ <code>columns</code> หรือไม่ ส่งกลับ <code>true</code> ถ้าตารางมีคอลัมน์ดังกล่าว และ <code>false</code> ถ้าไม่มี


## Examples

### Example #1 
กำหนดว่าตารางมีตาราง [Name] หรือไม่
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
ค้นหาว่าตารางมีคอลัมน์ [Name] และ [PhoneNumber] หรือไม่
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
