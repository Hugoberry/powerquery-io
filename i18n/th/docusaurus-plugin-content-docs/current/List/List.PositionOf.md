---
title: List.PositionOf
---

# List.PositionOf


## Description

ส่งกลับออฟเซตของค่าในรายการ


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

ส่งกลับออฟเซตที่ค่า <code>value</code> ปรากฏในรายการ <code>list</code> ส่งกลับ -1 ถ้าค่าไม่ปรากฏ    สามารถระบุพารามิเตอร์การเกิดเหตุการณ์ <code>occurrence</code> ที่เลือกได้<ul>   <li><code>occurrence</code>: จำนวนสูงสุดของเหตุการณ์ที่จะรายงาน</li></ul>


## Examples

### Example #1 
หาตำแหน่งในรายการ \{1, 2, 3} ที่ค่า 3 ปรากฏ
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
