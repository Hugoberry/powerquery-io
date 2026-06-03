---
title: Number.Exp
---

# Number.Exp


ยกกำลัง e ด้วยตัวเลขที่ระบุ


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

ส่งคืนผลลัพธ์ของการยกกำลัง e ของ `number` (ฟังก์ชันเอ็กซ์โพเนนเชียล)

-   `number`: `ตัวเลข` ซึ่งมีการคำนวณฟังก์ชันเอ็กซ์โพเนนเชียล ถ้า `number` เป็น null `ตัวเลข.Exp` จะส่งคืนค่าเป็น null


## Examples

### Example #1
ยกกำลัง e ด้วยเลข 3
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
