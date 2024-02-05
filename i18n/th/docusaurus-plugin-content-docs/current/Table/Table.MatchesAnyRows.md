---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

ระบุว่าแถวใดๆ ในตารางตรงกับเงื่อนไขที่กำหนดหรือไม่


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

ระบุว่าแถวใดๆ ใน <code>table</code> ตรงกับ <code>condition</code> ที่กำหนดหรือไม่ ส่งกลับ <code>true</code> ถ้าแถวใดๆ ตรงกับเงื่อนไข และ <code>false</code> ถ้าไม่ใช่


## Examples

### Example #1 
กำหนดว่าค่าแถวใดๆ ในคอลัมน์ [a] เท่ากับในตาราง &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; หรือไม่
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
กำหนดว่าค่าแถวใดๆ เป็น [a = 1, b = 2] ในตาราง &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; หรือไม่
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
