---
title: Table.PrefixColumns
---

# Table.PrefixColumns


ส่งกลับตารางซึ่งมีคอลัมน์ทั้งหมดขึ้นต้นด้วยข้อความที่กำหนด


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

ส่งคืนตารางที่ชื่อคอลัมน์ทั้งหมดจาก <code>table</code> ที่แสดงไว้มีคำนำหน้าเป็นข้อความที่กำหนดไว้ <code>prefix</code> บวกจุดทศนิยมในรูปแบบ <code>prefix</code><code>.ColumnName</code>


## Examples

### Example #1 
กำหนดค่านำหน้าคอลัมน์ด้วย &#34;MyTable&#34; ในตาราง
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
