---
title: Record.FieldValues
---

# Record.FieldValues


## Description

ส่งกลับรายการค่าเขตข้อมูล


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

ส่งกลับรายการค่าเขตข้อมูลในระเบียน <code>record</code>


## Examples

### Example #1 
ค้นหาค่าฟิลด์ในระเบียน
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
