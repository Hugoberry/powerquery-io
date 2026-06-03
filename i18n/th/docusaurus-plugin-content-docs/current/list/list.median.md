---
title: List.Median
---

# List.Median


ส่งกลับค่ากลางในรายการ


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

ส่งคืนข้อมูลค่ามัธยฐานของรายการ `list` ฟังก์ชันนี้ส่งกลับค่า `null` ถ้ารายการไม่มีค่าที่ไม่ใช่ `null` ถ้ามีรายการเป็นจำนวนคู่ ฟังก์ชันเลือกข้อมูลค่ามัธยฐานสองรายการที่มีขนาดเล็กกว่าเว้นแต่รายการจะ ประกอบด้วยวันที่เวลา ระยะเวลา จำนวน หรือเวลาทั้งหมด ในกรณีนี้ จะส่งคืนค่าเฉลี่ยของสองรายการ


## Examples

### Example #1
หาข้อมูลกลางของรายการ `{5, 3, 1, 7, 9}`
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
