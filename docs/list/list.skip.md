---
title: List.Skip
---

# List.Skip


Returns a list that skips the specified number of elements at the beginning of the list.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returns a list that skips the first element of list <code>list</code>. If <code>list</code> is an empty list an empty list is returned.This function takes an optional parameter, <code>countOrCondition</code>, to support skipping multiple values as listed below. <ul> <li>If a number is specified, up to that many items are skipped. </li> <li>If a condition is specified, the returned list begins with the first element in <code>list</code> that meets the criteria. Once an item fails the condition, no further items are considered. </li> <li>If this parameter is null, the default behavior is observed. </li> </ul>


## Examples

### Example #1 
Create a list from \{1, 2, 3, 4, 5} without the first 3 numbers.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Create a list from \{5, 4, 2, 6, 1} that starts with a number less than 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
