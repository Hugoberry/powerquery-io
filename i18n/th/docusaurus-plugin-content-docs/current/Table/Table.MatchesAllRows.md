---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

ระบุว่าทุกแถวในตารางตรงกับเงื่อนไขที่กำหนดหรือไม่


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

ระบุว่าทุกแถวใน <code>table</code> ตรงกับ <code>condition</code> ที่กำหนดหรือไม่ ส่งกลับ <code>true</code> ถ้าทุกแถวตรงกับเงื่อนไข และ <code>false</code> ถ้าไม่ใช่


## Examples

### Example #1 
กำหนดว่า ค่าแถวทั้งหมดใน [a] เป็นค่าคี่ในตาราง
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2 
ค้นหาว่าค่าแถวทุกค่าเป็น [a = 1, b = 2] ในตาราง &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; หรือไม่
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
