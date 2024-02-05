---
title: Number.RoundUp
---

# Number.RoundUp


## Description

ส่งคืนตัวเลขถัดไปที่มีค่าสูงที่สุด สามารถระบุจำนวนหลัก


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

ส่งกลับผลลัพธ์ของการปัดเศษ <code>number</code> ขึ้นเป็นจํานวนเต็มสูงสุดถัดไป ถ้า <code>number</code> เป็น null ฟังก์ชันนี้จะส่งกลับ null    ถ้ามีการระบุ <code>digits</code> <code>number</code> จะถูกปัดเศษเป็นจํานวนหลักทศนิยมที่ระบุ  


## Examples

### Example #1 
ปัดเศษ 1.234 ขึ้นเป็นจำนวนเต็ม
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
ปัดเศษ 1.999 ขึ้นเป็นจำนวนเต็ม
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
ปัดเศษ 1.234 ขึ้นเป็นทศนิยมสองตำแหน่ง
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
