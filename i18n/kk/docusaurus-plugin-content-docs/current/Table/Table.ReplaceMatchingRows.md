---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Көрсетілген жолдардың барлығын көрсетілген жолдармен ауыстырады.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> ішіндегі барлық көрсетілген жолдарды көрсетілгендермен ауыстырады. Ауыстыратын жолдар және ауыстырулар <code>replacements</code> ішінде \{old, new} пішімдерімен көрсетіледі.    Кестенің жолдарын салыстыруды басқару үшін <code>equationCriteria</code> міндетті емес параметрін көрсетуге болады.


## Examples

### Example #1 
Кестеде [a = 1, b = 2] және [a = 2, b = 3] жолдарын [a = -1, b = -2], [a = -2, b = -3] жолдарымен ауыстыру.
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
