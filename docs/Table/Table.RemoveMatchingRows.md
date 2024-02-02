---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Removes all occurrences of the specified rows from the table.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Removes all occurrences of the specified <code>rows</code> from the <code>table</code>.    An optional parameter <code>equationCriteria</code> may be specified to control the comparison between the rows of the table.


## Examples

### Example #1 
Remove any rows where [a = 1] from the table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
