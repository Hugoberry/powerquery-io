---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

ส่งคืนผลลัพธ์การปัดเศษลงสำหรับค่าบวกและการปัดเศษขึ้นสำหรับค่าลบ สามารถระบุจำนวนหลัก


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

ส่งคืนผลลัพธ์ของการปัดเศษ <code>number</code> ตามเครื่องหมายของตัวเลข ฟังก์ชันนี้จะปัดเศษลงสำหรับค่าบวกและปัดเศษขึ้นสำหรับค่าลบ    ถ้ามีการระบุเป็น <code>digits</code> จะมีการปัดเศษ <code>number</code> เป็นเลขทศนิยม <code>digits</code> หลัก  


## Examples

### Example #1 
ปัดเศษจำนวน -1.2 ไปทางศูนย์
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
ปัดเศษจำนวน 1.2 ไปทางศูนย์
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
ปัดเศษตัวเลข -1.234 ขึ้นเป็นทศนิยมสองตำแหน่งให้ใกล้เคียงค่าศูนย์
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
