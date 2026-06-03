---
title: Number.Power
---

# Number.Power


ยกกำลังตัวเลขด้วยตัวเลขที่ระบุ


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

ส่งคืนผลลัพธ์ของการยกกำลัง `number` ด้วยเลข `power` ถ้า `number` หรือ `power` เป็น null `ตัวเลข.Power` จะส่งคืนค่าเป็น null

-   `number`: เลขฐาน
-   `power`: เลขชี้กำลัง


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
