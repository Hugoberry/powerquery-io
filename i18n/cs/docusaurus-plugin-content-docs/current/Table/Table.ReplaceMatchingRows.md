---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Nahradí všechny zadané řádky zadanými řádky.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Nahradí všechny zadané řádky v tabulce <code>table</code> zadanými řádky. Řádky, které mají být nahrazeny, a nahrazení, jsou zadány v části <code>replacements</code> pomocí formátování \{old, new}.    Za účelem řízení porovnání mezi řádky tabulky může být určen volitelný parametr <code>equationCriteria</code>.


## Examples

### Example #1 
Nahradí v tabulce řádky [a = 1, b = 2] a [a = 2, b = 3] pomocí řádků [a = -1, b = -2] a [a = -2, b = -3].
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
