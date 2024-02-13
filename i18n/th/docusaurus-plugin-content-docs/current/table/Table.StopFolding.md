---
title: Table.StopFolding
---

# Table.StopFolding


ป้องกันไม่ให้มีการเรียกใช้การดําเนินการแบบดาวน์สตรีมกับแหล่งข้อมูลต้นฉบับ


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

ป้องกันไม่ให้มีการเรียกใช้การดําเนินการแบบดาวน์สตรีมกับแหล่งข้อมูลต้นฉบับใน <code>table</code>


## Examples

### Example #1 
ดึงข้อมูลจากตาราง SQL ในลักษณะที่ป้องกันไม่ให้มีการเรียกใช้การดําเนินการแบบดาวน์สตรีมเป็นคิวรีใน SQL Server
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(dbo_MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
