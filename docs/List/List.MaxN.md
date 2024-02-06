---
title: List.MaxN
---

# List.MaxN


Returns the maximum value(s) in the list. The number of values to return or a filtering condition must be specified.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Returns the maximum value(s) in the list, <code>list</code>.    After the rows are sorted, optional parameters may be specified to further filter the result. The optional parameter <code>countOrCondition</code> specifies the number of values to return or a filtering condition. The optional parameter <code>comparisonCriteria</code> specifies how to compare values in the list. <ul>        <li> <code>list</code>: The list of values.</li>        <li> <code>countOrCondition</code>: If a number is specified, a list of up to <code>countOrCondition</code> items in ascending order is returned. If a condition is specified, a list of items that initially meet the condition is returned. Once an item fails the condition, no further items are considered.</li><li><code>comparisonCriteria</code>: <i>[Optional]</i> An optional <code>comparisonCriteria</code> value can be specified to determine how to compare the items in the list. If this parameter is null, the default comparer is used. </li></ul>



## Category
List.Ordering
