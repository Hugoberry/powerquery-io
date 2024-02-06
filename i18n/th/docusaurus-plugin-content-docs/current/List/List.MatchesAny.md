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

ส่งกลับ <code>true</code> ถ้าฟังก์ชันเงื่อนไข <code>condition</code> ถูกยอมรับโดยค่าใดๆ ในรายการ <code>list</code> มิฉะนั้นจะส่งกลับ <code>false</code>


## Examples

### Example #1 
หาว่าค่าใดๆ ในรายการ \{9, 10, 11} มากกว่า 10 หรือไม่
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
ค้นหาว่าค่าใดๆ ในรายการ \{1, 2, 3} ที่มากกว่า 10
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
