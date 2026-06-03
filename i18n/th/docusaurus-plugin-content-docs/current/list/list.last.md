---
title: List.Last
---

# List.Last


ส่งกลับค่าสุดท้ายของรายการหรือค่าเริ่มต้นที่ระบุหากว่างเปล่า


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

ส่งกลับรายการสุดท้ายในรายการที่ระบุหรือค่าเริ่มต้นเพิ่มเติม หากรายการว่างเปล่า

-   `list`: รายการที่จะตรวจสอบ
-   `defaultValue`: (ไม่บังคับ) ค่าเริ่มต้นที่จะส่งกลับ หากรายการว่างเปล่า หากรายการว่างเปล่าและไม่ได้ระบุค่าเริ่มต้น ฟังก์ชันจะส่งกลับ `null`


## Examples

### Example #1
ค้นหาค่าสุดท้ายในรายการ \{1, 2, 3\}
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
ค้นหาค่าสุดท้ายในรายการ \{\} หรือ -1 หากค่าว่างเปล่า
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
