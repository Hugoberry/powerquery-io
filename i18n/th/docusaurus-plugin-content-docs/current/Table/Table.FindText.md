---
title: Table.FindText
---

# Table.FindText


## Description

ส่งกลับแถวทั้งหมดซึ่งมีข้อความที่กำหนดให้ในตาราง


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

ส่งกลับแถวในตาราง <code>table</code> ซึ่งมีข้อความ <code>text</code> ถ้าไม่พบข้อความ ระบบจะส่งกลับตารางว่าง


## Examples

### Example #1 
ค้นหาแถวในตารางที่มีค่า &#34;Bob&#34;
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
