---
title: List.First
---

# List.First


## Description

ส่งกลับค่าแรกของรายการหรือค่าเริ่มต้นที่ระบุหากว่างเปล่า


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

ส่งกลับข้อมูลแรกในรายการ <code>list</code> หรือค่าเริ่มต้น <code>defaultValue</code> ที่มีให้เลือก ถ้ารายการว่างเปล่า    ถ้ารายการว่างเปล่าและไม่มีการระบุค่าเริ่มต้น ฟังก์ชันจะส่งกลับ <code>null</code>


## Examples

### Example #1 
ค้นหาค่าแรกในรายการ \{1, 2, 3}
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
ค้นหาค่าแรกในรายการ \{} ถ้ารายการว่างเปล่า ให้ส่งกลับ -1
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
