---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Nahradí všetky zadané riadky uvedenými riadkami.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Nahradí všetky zadané riadky v tabuľke `table` uvedenými riadkami. Riadky, ktoré sa majú nahradiť, aj nahrádzajúce riadky sú zadané v tabuľke `replacements` pomocou formátovania \{old, new\}. Možno stanoviť voliteľný parameter `equationCriteria` a kontrolovať tak porovnanie medzi riadkami tabuľky.


## Examples

### Example #1
Nahraďte v tabuľke riadky \[a = 1, b = 2\] a \[a = 2, b = 3\] riadkami \[a = -1, b = -2\], \[a = -2, b = -3\].
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
