---
title: List.FirstN
---

# List.FirstN


## Description

ส่งกลับข้อมูลชุดแรกในรายการโดยระบุจำนวนข้อมูลที่จะส่งกลับหรือเงื่อนไขที่เหมาะสม


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>ถ้ามีการระบุจำนวน จะมีการส่งกลับหลายรายการได้สูงสุดตามจำนวนดังกล่าว </li>  <li>ถ้ามีการระบุเงื่อนไข จะมีการส่งกลับรายการทั้งหมดซึ่งตรงตามเงื่อนไขในเบื้องต้น เมื่อรายการใดรายการหนึ่งไม่เป็นไปตามเงื่อนไข จะไม่มีการพิจารณารายการถัดไป </li> </ul>


## Examples

### Example #1 
ค้นหาค่าเริ่มต้นในรายการ \{3, 4, 5, -1, 7, 8, 2} ที่มากกว่า 0
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
