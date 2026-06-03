---
title: List.Max
---

# List.Max


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


## Remarks

ส่งกลับหน่วยข้อมูลสูงสุดในรายการหรือค่าเริ่มต้นที่เลือกได้ถ้ารายการว่างเปล่า

-   `list`: รายการค่าต่างๆ
-   `default`: (ไม่บังคับ) ค่าที่จะส่งกลับถ้ารายการว่างเปล่า
-   `comparisonCriteria`: (ไม่บังคับ) ฟังก์ชันที่ใช้ในการแปลงค่าก่อนที่จะถูกเปรียบเทียบ ถ้าพารามิเตอร์นี้ `null` ค่าจะถูกเปรียบเทียบโดยไม่มีการแปลงใด ๆ
-   `includeNulls`: (ไม่บังคับ) ระบุว่าควรรวมค่า `null` ในรายการในการกําหนดรายการสูงสุดหรือไม่ ค่าเริ่มต้นคือ `true`


## Examples

### Example #1
ค้นหาค่าสูงสุดในรายการที่ระบุ
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
ค้นหาค่าสูงสุดในรายการที่ระบุ หรือส่งกลับ -1 ถ้าค่าว่างเปล่า
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
ค้นหารายการในรายการของค่าข้อความที่เรียงตามตัวอักษรสุดท้าย ถ้ารายการว่างเปล่า ให้ส่งกลับ "none"
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
ค้นหาวันที่ล่าสุดจากรายการวันที่ของเยอรมัน ถ้ารายการว่างเปล่า ให้ส่งกลับวันที่ 1 มกราคม 2000
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
