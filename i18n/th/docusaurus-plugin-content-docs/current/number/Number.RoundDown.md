---
title: Number.RoundDown
---

# Number.RoundDown


ส่งคืนตัวเลขก่อนหน้าที่มีค่าสูงที่สุด สามารถระบุจำนวนหลัก


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

ส่งกลับผลลัพธ์ของการปัดเศษ <code>number</code> ลงเป็นจํานวนเต็มสูงสุดก่อนหน้า ถ้า <code>number</code> เป็น null ฟังก์ชันนี้จะส่งกลับ null ถ้ามีการระบุ <code>digits</code> <code>number</code> จะถูกปัดเศษเป็นจํานวนหลักทศนิยมที่ระบุ  


## Examples

### Example #1 
ปัดเศษ 1.234 ลงเป็นจำนวนเต็ม
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
ปัดเศษ 1.999 ลงเป็นจำนวนเต็ม
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
ปัดเศษ 1.999 ลงเป็นทศนิยมสองตำแหน่ง
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
