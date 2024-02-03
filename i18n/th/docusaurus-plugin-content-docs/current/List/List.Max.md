---
title: List.Max
---

# List.Max


## Description

ส่งกลับค่าสูงสุดหรือค่าเริ่มต้นสำหรับรายการว่างเปล่า


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

ส่งคืนข้อมูลสูงสุดในรายการ <code>list</code> หรือค่าเริ่มต้น <code>default</code> ที่มีให้เลือก ถ้ารายการว่างเปล่า    อาจระบุค่า เกณฑ์การเปรียบเทียบ <code>comparisonCriteria</code> ที่เลือกได้เพื่อกำหนดวิธีเปรียบเทียบข้อมูลในรายการ ถ้าพารามิเตอร์เป็น null จะมีการใช้ตัวเปรียบเทียบเริ่มต้น


## Examples

### Example #1 
หาค่าสูงสุดในรายการ \{1, 4, 7, 3, -2, 5}
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
ค้นหาค่าสูงสุดในรายการ \{} หรือส่งกลับ -1 หากค่าว่างเปล่า 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
