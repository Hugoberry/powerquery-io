---
title: Record.ToList
---

# Record.ToList


## Description

ส่งกลับรายการของค่าที่ประกอบด้วยค่าเขตข้อมูลของระเบียนที่ป้อน


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

ส่งกลับรายการของค่าที่ประกอบด้วยค่าเขตข้อมูลจากค่าที่ป้อน <code>record</code>


## Examples

### Example #1 
แยกค่าเขตข้อมูลออกจากระเบียน
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
