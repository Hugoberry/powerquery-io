---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

ส่งกลับออฟเซตแรกของค่าในรายการ


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

ส่งกลับออฟเซตในรายการ <code>list</code> ของการเกิดเหตุการณ์ครั้งแรกของค่าในรายการ <code>values</code> ส่งกลับ -1 ถ้าไม่พบการปรากฏ    สามารถระบุพารามิเตอร์การปรากฏ <code>occurrence</code> ที่เลือกได้<ul>   <li><code>occurrence</code>: จำนวนสูงสุดของเหตุการณ์ที่สามารถส่งกลับได้</li></ul>


## Examples

### Example #1 
หาตำแหน่งแรกในรายการ \{1, 2, 3} ที่ค่า 2 หรือ 3 ปรากฏ
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
