---
title: List.MatchesAny
---

# List.MatchesAny


ส่งกลับเป็น จริง ถ้าฟังก์ชันเงื่อนไขถูกยอมรับโดยค่าใดๆ


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

ส่งกลับ `true` ถ้าฟังก์ชันเงื่อนไขยอมรับค่าใดๆ ในรายการ มิฉะนั้นจะส่งกลับ `false`

-   `list`: รายการที่มีค่าที่จะตรวจสอบ
-   `condition`: เงื่อนไขที่จะตรวจสอบกับค่าในรายการ


## Examples

### Example #1
กำหนดว่าค่าใดๆ ในรายการ \{9, 10, 11\} มีค่ามากกว่า 10 หรือไม่
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
กำหนดว่าค่าใดๆ ในรายการ \{1, 2, 3\} มีค่ามากกว่า 10 หรือไม่
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
กำหนดว่าค่าข้อความใดๆ ในรายการมี "cat" หรือไม่ โดยไม่สนใจตัวพิมพ์ใหญ่และเล็ก
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
กำหนดว่าวันที่ใดๆ มีปี 2021 หรือไม่
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
