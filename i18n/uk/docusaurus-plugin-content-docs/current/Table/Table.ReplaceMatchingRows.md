---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Замінює всі вказані рядки наданими рядками.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Замінює всі вказані рядки в таблиці "<code>table</code>" на надані. Рядки, які слід замінити, і заміни надає "<code>replacements</code>" у форматі \{old, new}.    Можна вказати додатковий параметр <code>equationCriteria</code>, щоб керувати порівнянням рядків таблиці.


## Examples

### Example #1 
Замінити в таблиці рядки [a = 1, b = 2] і [a = 2, b = 3] на [a = -1, b = -2], [a = -2, b = -3].
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
