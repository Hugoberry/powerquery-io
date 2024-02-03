---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

ส่งคืนผลลัพธ์การปัดเศษขึ้นสำหรับค่าบวกและการปัดเศษลงสำหรับค่าลบ สามารถระบุจำนวนหลัก


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

ส่งคืนผลลัพธ์ของการปัดเศษ <code>number</code> ตามเครื่องหมายของตัวเลข ฟังก์ชันนี้จะปัดเศษขึ้นสำหรับค่าบวกและปัดเศษลงสำหรับค่าลบ    ถ้ามีการระบุเป็น <code>digits</code> จะมีการปัดเศษ <code>number</code> เป็นเลขทศนิยม <code>digits</code> หลัก  


## Examples

### Example #1 
ปัดเศษจำนวน -1.2 ห่างออกจากศูนย์
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
ปัดเศษจำนวน 1.2 ห่างออกจากศูนย์
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
ปัดเศษตัวเลข -1.234 ลงเป็นทศนิยมสองตำแหน่งและน้อยกว่าศูนย์
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
