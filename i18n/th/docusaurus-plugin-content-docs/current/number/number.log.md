---
title: Number.Log
---

# Number.Log


ส่งกลับลอการิทึมของตัวเลขไปยังฐานที่ระบุ (ค่าเริ่มต้น e)


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

ส่งคืนลอการิทึมของตัวเลข `number` ไปยังฐาน `base` ที่ระบุ ถ้าไม่ได้ระบุ `base` ค่าเริ่มต้นจะเป็น ตัวเลข.E ถ้า `number` เป็น null `ตัวเลข.บันทึก` จะส่งกลับ null


## Examples

### Example #1
รับลอการิทึมฐาน 10 ของ 2
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
รับลอการิทึมฐาน e ของ 2
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
