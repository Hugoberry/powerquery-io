---
title: List.MinN
---

# List.MinN


Returns the minimum value(s) in the list. The number of values to return or a filtering condition may be specified.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Returns the minimum value(s) in the list, <code>list</code>.    The parameter, <code>countOrCondition</code>, specifies the number of values to return or a filtering condition. The optional parameter, <code>comparisonCriteria</code>, specifies how to compare values in the list. <ul>        <li> <code>list</code>: The list of values.</li>        <li> <code>countOrCondition</code>: If a number is specified, a list of up to <code>countOrCondition</code> items in ascending order is returned. If a condition is specified, a list of items that initially meet the condition is returned. Once an item fails the condition, no further items are considered. If this parameter is null, the single smallest value in the list is returned.</li><li><code>comparisonCriteria</code>: <i>[Optional]</i> An optional <code>comparisonCriteria</code> value can be specified to determine how to compare the items in the list. If this parameter is null, the default comparer is used. </li></ul>


## Examples

### Example #1 
Find the 5 smallest values in the list &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
