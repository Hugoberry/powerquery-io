---
title: Number.Power
---

# Number.Power


## Description

ยกกำลังตัวเลขด้วยตัวเลขที่ระบุ


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

ส่งคืนผลลัพธ์ของการยกกำลัง <code>number</code> ด้วยเลข <code>power</code>    ถ้า <code>number</code> หรือ <code>power</code> เป็น null <code>ตัวเลข.Power</code> จะส่งคืนค่าเป็น null      <ul>        <li><code>number</code>: เลขฐาน</li>        <li><code>power</code>: เลขชี้กำลัง</li>      </ul>


## Examples

### Example #1 
หาค่าของ 5 ที่ยกกำลังด้วยเลข 3 (5 ในลูกบาศก์)
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
