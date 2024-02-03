---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

เอาการปรากฏทั้งหมดของแถวที่ระบุออกจากตาราง


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

เอาเหตุการณ์ทั้งหมดของ <code>rows</code> ที่ระบุออกจาก <code>table</code>    พารามิเตอร์ที่เลือกได้ <code>equationCriteria</code> อาจถูกระบุเพื่อควบคุมการเปรียบเทียบระหว่างแถวของตาราง


## Examples

### Example #1 
เอาแถวใดๆ ซึ่งมี [a = 1] ออกจากตาราง &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
