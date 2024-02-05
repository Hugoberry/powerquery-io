---
title: List.Min
---

# List.Min


## Description

ส่งกลับค่าต่ำสุดหรือค่าเริ่มต้นสำหรับรายการว่างเปล่า


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

ส่งคืนข้อมูลต่ำสุดในรายการ <code>list</code> หรือค่าเริ่มต้น <code>default</code> ที่มีให้เลือก ถ้ารายการว่างเปล่า    อาจระบุค่า เกณฑ์การเปรียบเทียบ <code>comparisonCriteria</code> ที่เลือกได้เพื่อกำหนดวิธีเปรียบเทียบข้อมูลในรายการ ถ้าพารามิเตอร์เป็น null จะมีการใช้ตัวเปรียบเทียบเริ่มต้น


## Examples

### Example #1 
หาค่าต่ำสุดในรายการ \{1, 4, 7, 3, -2, 5}
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
ค้นหาค่าต่ำสุดในรายการ \{} หรือส่งกลับ -1 หากค่าว่างเปล่า 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
