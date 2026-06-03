---
title: List.ContainsAll
---

# List.ContainsAll


ระบุตำแหน่งที่รายการมีค่าทั้งหมดในรายการอื่น


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

ระบุว่ารายการมีค่าทั้งหมดจากรายการอื่นหรือไม่ ส่งกลับ `true` หากพบค่าทั้งหมดในรายการ และ `false` หากไม่พบ

-   `list`: รายการที่จะค้นหา
-   `values`: รายการค่าที่จะค้นหาในรายการแรก
-   `equationCriteria`: (ไม่บังคับ) ค่าเปรียบเทียบที่ใช้เพื่อระบุว่าค่าสองค่าเท่ากันหรือไม่


## Examples

### Example #1
ระบุว่ารายการ \{1, 2, 3, 4, 5\} มี 3 และ 4 หรือไม่
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
ระบุว่ารายการ \{1, 2, 3, 4, 5\} มี 5 และ 6 หรือไม่
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
ระบุว่ารายการมีสุนัขและม้าหรือไม่ โดยไม่สนใจตัวพิมพ์เล็ก/ใหญ่
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
ระบุว่ารายการมีวันที่ 8 เมษายน 2022 และ 6 กรกฎาคม 2021 หรือไม่
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
