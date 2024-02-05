---
title: List.Median
---

# List.Median


## Description

ส่งกลับค่ากลางในรายการ


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

ส่งคืนข้อมูลค่ามัธยฐานของรายการ <code>list</code> ฟังก์ชันนี้ส่งกลับค่า <code>null</code> ถ้ารายการไม่มีค่าที่ไม่ใช่ <code>null</code>    ถ้ามีรายการเป็นจำนวนคู่ ฟังก์ชันเลือกข้อมูลค่ามัธยฐานสองรายการที่มีขนาดเล็กกว่าเว้นแต่รายการจะ    ประกอบด้วยวันที่เวลา ระยะเวลา จำนวน หรือเวลาทั้งหมด ในกรณีนี้ จะส่งคืนค่าเฉลี่ยของสองรายการ


## Examples

### Example #1 
หาข้อมูลกลางของรายการ &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
