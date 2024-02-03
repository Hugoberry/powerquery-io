---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Replaces all the specified rows with the provided row(s).


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Replaces all the specified rows in the <code>table</code> with the provided ones. The rows to replace and the replacements are specified in <code>replacements</code>, using \{old, new} formatting.    An optional <code>equationCriteria</code> parameter may be specified to control comparison between the rows of the table.


## Examples

### Example #1 
Replace the rows [a = 1, b = 2] and [a = 2, b = 3] with [a = -1, b = -2],[a = -2, b = -3] in the table.
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
