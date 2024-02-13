---
title: List.RemoveLastN
---

# List.RemoveLastN


Returns a list that removes the specified number of elements from the end of the list.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returns a list that removes the last <code>countOrCondition</code> elements from the end of list <code>list</code>. If <code>list</code> has less than <code>countOrCondition</code> elements, an empty list is returned. <ul> <li>If a number is specified, up to that many items are removed. </li> <li>If a condition is specified, the returned list ends with the first element from the bottom in <code>list</code> that meets the criteria. Once an item fails the condition, no further items are considered. </li> <li>If this parameter is null, only one item is removed. </li> </ul>


## Examples

### Example #1 
Create a list from \{1, 2, 3, 4, 5} without the last 3 numbers.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Create a list from \{5, 4, 2, 6, 4} that ends with a number less than 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
