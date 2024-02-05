---
title: List.Positions
---

# List.Positions


## Description

ส่งกลับรายการออฟเซตสำหรับค่าที่ป้อน


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

ส่งกลับรายการออฟเซตสำหรับรายการค่าที่ป้อน <code>list</code>    เมื่อใช้ List.Transform เพื่อเปลี่ยนรายการ จะสามารถใช้รายการตำแหน่งเพื่อให้การเข้าถึงการแปลงไปยังตำแหน่งได้


## Examples

### Example #1 
หาออฟเซตของค่าในรายการ \{1, 2, 3, 4, null, 5}
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
