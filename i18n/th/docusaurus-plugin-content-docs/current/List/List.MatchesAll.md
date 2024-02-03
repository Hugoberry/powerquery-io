---
title: List.MatchesAll
---

# List.MatchesAll


## Description

ส่งกลับเป็น จริง ถ้าฟังก์ชันเงื่อนไขได้รับการยอมรับจากค่าทั้งหมดในรายการ


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

ส่งกลับ <code>true</code> ถ้าฟังก์ชันเงื่อนไข <code>condition</code> ถูกยอมรับโดยค่าทั้งหมดในรายการ <code>list</code> มิฉะนั้นจะส่งกลับ <code>false</code>


## Examples

### Example #1 
ระบุว่าค่าทั้งหมดในรายการ \{11, 12, 13} มากกว่า 10 หรือไม่
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
ระบุว่าค่าทั้งหมดในรายการ \{1, 2, 3} มากกว่า 10 หรือไม่
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
