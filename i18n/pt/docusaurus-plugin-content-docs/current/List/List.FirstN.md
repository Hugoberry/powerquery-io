---
title: List.FirstN
---

# List.FirstN


## Description

Returns the first set of items in the list by specifying how many items to return or a qualifying condition.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>If a number is specified, up to that many items are returned. </li>  <li>If a condition is specified, all items are returned that initially meet the condition. Once an item fails the condition, no further items are considered. </li> </ul>


## Examples

### Example #1 
Find the intial values in the list \{3, 4, 5, -1, 7, 8, 2} that are greater than 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
