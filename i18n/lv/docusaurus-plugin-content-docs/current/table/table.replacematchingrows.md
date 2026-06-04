---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Tiek aizstātas visas norādītās rindas ar nodrošināto(-ajām) rindu(-ām).


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Aizstāj visas norādītās `table` rindas ar nodrošinātajām rindām. Aizstājamās rindas un aizvietojumi ir norādīti `replacements`, izmantojot \{old, new\} formatējumu. Varat norādīt neobligātu parametru `equationCriteria`, lai kontrolētu salīdzināšanu starp tabulas rindām.


## Examples

### Example #1
Aizstājiet rindas \[a = 1, b = 2\] un \[a = 2, b = 3\] ar \[a = -1, b = -2\],\[a = -2, b = -3\] tabulā.
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
