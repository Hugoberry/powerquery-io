---
title: Table.SplitAt
---

# Table.SplitAt


Returns a list containing the first count rows specified and the remaining rows.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Returns a list containing two tables: a table with the first N rows of <code>table</code> (as specified by <code>count</code>) and a table containing the remaining rows of <code>table</code>.If the tables of the resulting list are enumerated exactly once and in order, the function will enumerate <code>table</code> only once.


## Examples

### Example #1 
Return the first two rows of the table and the remaining rows of the table.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
