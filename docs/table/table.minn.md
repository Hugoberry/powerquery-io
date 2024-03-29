---
title: Table.MinN
---

# Table.MinN


Returns the smallest row(s) using the given criteria.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Returns the smallest row(s) in the <code>table</code>, given the <code>comparisonCriteria</code>. After the rows are sorted, the <code>countOrCondition</code> parameter must be specified to further filter the result. Note the sorting algorithm cannot guarantee a fixed sorted result. The <code>countOrCondition</code> parameter can take multiple forms:    <ul>        <li> If a number is specified, a list of up to <code>countOrCondition</code> items in ascending order is returned. </li>        <li> If a condition is specified, a list of items that initially meet the condition is returned. Once an item fails the condition, no further items are considered. </li> </ul>


## Examples

### Example #1 
Find the row with the smallest value in column [a] with the condition [a] &lt; 3, in the table. The rows are sorted before the filter is applied.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Find the row with the smallest value in column [a] with the condition [b] &lt; 0, in the table. The rows are sorted before the filter is applied.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
