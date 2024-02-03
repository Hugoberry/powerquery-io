---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Tiek aizstātas visas norādītās rindas ar nodrošināto(-ajām) rindu(-ām).


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Aizstāj visas norādītās <code>table</code> rindas ar nodrošinātajām rindām. Aizstājamās rindas un aizvietojumi ir norādīti <code>replacements</code>, izmantojot \{old, new} formatējumu.    Varat norādīt neobligātu parametru <code>equationCriteria</code>, lai kontrolētu salīdzināšanu starp tabulas rindām.


## Examples

### Example #1 
Aizstājiet rindas [a = 1, b = 2] un [a = 2, b = 3] ar [a = -1, b = -2],[a = -2, b = -3] tabulā.
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
