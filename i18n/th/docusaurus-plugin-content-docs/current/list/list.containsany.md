---
title: List.ContainsAny
---

# List.ContainsAny


ระบุตำแหน่งที่รายการมีค่าใดๆ ในรายการอื่น


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

ระบุว่ารายการมีค่าใดๆ จากรายการอื่นหรือไม่ ส่งกลับ `true` หากพบค่าในรายการ และ `false` หากไม่พบ

-   `list`: รายการที่จะค้นหา
-   `values`: รายการค่าที่จะค้นหาในรายการแรก
-   `equationCriteria`: (ไม่บังคับ) ค่าเปรียบเทียบที่ใช้เพื่อระบุว่าค่าสองค่าเท่ากันหรือไม่


## Examples

### Example #1
ระบุว่ารายการ \{1, 2, 3, 4, 5\} มี 3 หรือ 9 หรือไม่
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
ระบุว่ารายการ \{1, 2, 3, 4, 5\} มี 6 หรือ 7 หรือไม่
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
ระบุว่ารายการมีม้าหรือนกฮูกหรือไม่ ไม่สนใจตัวพิมพ์เล็ก/ใหญ่
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
ระบุว่ารายการมีวันที่เป็น 8 เมษายน 2022 หรือ 12 มกราคม 2021 หรือไม่
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
