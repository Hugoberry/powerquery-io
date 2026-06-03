---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


ระบุว่าแถวใดๆ ในตารางตรงกับเงื่อนไขที่กำหนดหรือไม่


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

ระบุว่าแถวใดๆ ใน `table` ตรงกับ `condition` ที่กำหนดหรือไม่ ส่งกลับ `true` ถ้าแถวใดๆ ตรงกับเงื่อนไข และ `false` ถ้าไม่ใช่


## Examples

### Example #1
กำหนดว่าค่าแถวใดๆ ในคอลัมน์ \[a\] เท่ากับในตาราง `({[a = 2, b = 4], [a = 6, b = 8]})` หรือไม่
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2
กำหนดว่าค่าแถวใดๆ เป็น \[a = 1, b = 2\] ในตาราง `({[a = 1, b = 2], [a = 3, b = 4]})` หรือไม่
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
