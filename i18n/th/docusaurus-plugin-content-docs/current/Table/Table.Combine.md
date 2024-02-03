---
title: Table.Combine
---

# Table.Combine


## Description

ส่งกลับตารางที่เป็นผลลัพธ์ของการผสานรายการตาราง


## Syntax

```powerquery
Table.Combine(
    tables as list,
    optional columns as any
) as table
```


## Details

ส่งกลับตารางที่เป็นผลลัพธ์ของการผสานรายการตาราง <code>tables</code> ตารางที่เป็นผลลัพธ์จะมีโครงสร้างชนิดแถวที่กำหนดโดย <code>columns</code> หรือ ยูเนียนของชนิดข้อมูลป้อนเข้าหากไม่ได้ระบุ <code>columns</code> ไว้


## Examples

### Example #1 
ผสานสามตารางต่อไปนี้เข้าด้วยกัน
```powerquery
Table.Combine({
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]}),
    Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})
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
ผสานสามตารางที่มีโครงสร้างที่แตกต่างกัน
```powerquery
Table.Combine({
    Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
    Table.FromRecords({[Cell = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Phone = "123-4567", Fax = null, Cell = null],
    [Name = null, Phone = "838-7171", Fax = "987-6543", Cell = null],
    [Name = null, Phone = null, Fax = null, Cell = "543-7890"]
})
```


### Example #3 
ผสานสองตารางและโครงการบนชนิดที่กำหนดให้
```powerquery
Table.Combine(
    {
        Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
        Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
        Table.FromRecords({[Cell = "543-7890"]})
    },
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = null, Name = "Bob"],
    [CustomerID = null, Name = null],
    [CustomerID = null, Name = null]
})
```




## Category
Table.Row operations
