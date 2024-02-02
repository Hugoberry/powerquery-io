---
title: Table.MaxN
---

# Table.MaxN


## Description

Returns the largest row(s) using the given criteria.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Returns the largest row(s) in the <code>table</code>, given the <code>comparisonCriteria</code>.    After the rows are sorted, the <code>countOrCondition</code> parameter must be specified to further filter the result. Note the sorting algorithm cannot guarantee a fixed sorted result. The <code>countOrCondition</code> parameter can take multiple forms:    <ul>        <li> If a number is specified, a list of up to <code>countOrCondition</code> items in ascending order is returned. </li>        <li> If a condition is specified, a list of items that initially meet the condition is returned. Once an item fails the condition, no further items are considered. </li> </ul>


## Examples

### Example #1 
Find the row with the largest value in column [a] with the condition [a] &gt; 0, in the table. The rows are sorted before the filter is applied.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Find the row with the largest value in column [a] with the condition [b] &gt; 0, in the table. The rows are sorted before the filter is applied.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
