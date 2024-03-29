---
title: List.LastN
---

# List.LastN


Returns the last value in the list.  Can optionally specify how many values to return or a qualifying condition.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Returns the last item of the list <code>list</code>. If the list is empty, an exception is thrown. This function takes an optional parameter, <code>countOrCondition</code>, to support gathering multiple items or filtering items. <code>countOrCondition</code> can be specified in three ways: <ul>  <li>If a number is specified, up to that many items are returned. </li>  <li>If a condition is specified, all items are returned that initially meet the condition, starting at the end of the list. Once an item fails the condition, no further items are considered. </li>  <li>If this parameter is null the last item in the list is returned.</li> </ul>


## Examples

### Example #1 
Find the last value in the list \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Find the last values in the list \{3, 4, 5, -1, 7, 8, 2} that are greater than 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
