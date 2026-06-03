---
title: List.Contains
---

# List.Contains


ระบุว่ารายการมีค่าหรือไม่


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

ระบุว่ารายการมีค่าที่ระบุหรือไม่ ส่งกลับ `true` หากพบค่าในรายการ และ `false` หากไม่พบ

-   `list`: รายการที่จะค้นหา
-   `value`: ค่าที่จะค้นหาในรายการ
-   `equationCriteria`: (ไม่บังคับ) ค่าเปรียบเทียบที่ใช้เพื่อระบุว่าค่าสองค่าเท่ากันหรือไม่


## Examples

### Example #1
ระบุว่ารายการ \{1, 2, 3, 4, 5\} มี 3 หรือไม่
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
ระบุว่ารายการ \{1, 2, 3, 4, 5\} มี 6 หรือไม่
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
กำหนดว่ารายการมี "rhubarb" หรือไม่ โดยไม่สนใจตัวพิมพ์เล็ก/ใหญ่
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
กำหนดว่ารายการมีวันที่ 8 เมษายน 2022 หรือไม่
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
