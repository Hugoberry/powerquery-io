---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


แทนที่แถวที่ระบุทั้งหมดด้วยแถวที่กำหนดให้


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

แทนที่แถวที่ระบุทั้งหมดใน <code>table</code> ด้วยแถวที่กำหนดให้ แถวที่จะแทนที่และการแทนที่จะถูกระบุใน <code>replacements</code> โดยใช้การจัดรูปแบบ \{old, new}    พารามิเตอร์ที่เลือกได้ <code>equationCriteria</code> อาจถูกระบุเพื่อควบคุมการเปรียบเทียบระหว่างแถวของตาราง


## Examples

### Example #1 
แทนที่แถว [a = 1, b = 2] และ [a = 2, b = 3] ด้วย [a = -1, b = -2],[a = -2, b = -3] ในตาราง
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
