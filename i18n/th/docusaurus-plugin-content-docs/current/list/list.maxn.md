---
title: List.MaxN
---

# List.MaxN


ส่งกลับค่าสูงสุดในรายการ ต้องระบุจํานวนค่าที่จะส่งกลับหรือเงื่อนไขตัวกรอง


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

ส่งกลับค่าสูงสุดในรายการที่ระบุ หลังจากเรียงลําดับแถวแล้ว คุณสามารถระบุพารามิเตอร์ที่เลือกได้เพื่อกรองผลลัพธ์เพิ่มเติม

-   `list`: รายการของค่า
-   `countOrCondition`: ระบุจํานวนค่าที่จะส่งกลับหรือเงื่อนไขตัวกรอง ถ้ามีการระบุตัวเลข รายการหน่วยข้อมูลสูงสุด `countOrCondition` รายการจากมากไปหาน้อยจะถูกส่งกลับ ถ้ามีการระบุเงื่อนไข รายการที่ส่งกลับจะรวมรายการทั้งหมดที่ตรงกับเงื่อนไข
-   `comparisonCriteria`: (ไม่บังคับ) ฟังก์ชันที่ใช้ในการแปลงค่าก่อนที่จะนำไปเปรียบเทียบ หากพารามิเตอร์นี้เป็น `null` ค่าจะถูกเปรียบเทียบโดยไม่มีการแปลงใดๆ
-   `includeNulls`: (ไม่บังคับ) ระบุว่าควรรวมค่า `null` ในรายการในการกําหนดรายการสูงสุดหรือไม่ ค่าเริ่มต้นคือ `true`


## Examples

### Example #1
ค้นหาค่า 5 อันดับแรกในรายการที่ระบุ
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
ค้นหาคำที่มีมากกว่า 3 ตัวอักษร
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
ค้นหาสามวันที่ล่าสุดจากรายการวันที่เยอรมัน
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
