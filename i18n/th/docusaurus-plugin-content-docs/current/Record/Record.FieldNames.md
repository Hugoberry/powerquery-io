---
title: Record.FieldNames
---

# Record.FieldNames


## Description

ส่งกลับชื่อเขตข้อมูล


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

ส่งกลับชื่อเขตข้อมูลในระเบียน <code>record</code> เป็นข้อความ


## Examples

### Example #1 
ค้นหาชื่อฟิลด์ในระเบียน
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
