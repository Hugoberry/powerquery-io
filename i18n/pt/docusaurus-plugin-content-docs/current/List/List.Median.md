---
title: List.Median
---

# List.Median


## Description

Returns the median value in the list.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Returns the median item of the list <code>list</code>. This function returns <code>null</code> if the list contains no non-<code>null</code> values.    If there is an even number of items, the function chooses the smaller of the two median items unless the list is    comprised entirely of datetimes, durations, numbers or times, in which case it returns the average of the two items.


## Examples

### Example #1 
Find the median of the list &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
