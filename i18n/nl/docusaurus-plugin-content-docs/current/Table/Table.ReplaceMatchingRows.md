---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Vervangt alle opgegeven rijen door de aangeleverde rij of rijen.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Hiermee worden alle opgegeven rijen vervangen in de <code>table</code> door de opgegeven rijen. De rijen die moeten worden vervangen en de vervangingen worden opgegeven in <code>replacements</code>, met behulp van \{old, new}-opmaak. Een optionele <code>equationCriteria</code>-parameter kan worden opgegeven voor het aansturen van de vergelijking tussen de rijen van de tabel.


## Examples

### Example #1 
De rijen [a = 1, b = 2] en [a = 2, b = 3] in de kolom vervangen door [a = -1, b = -2],[a = -2, b = -3] .
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
