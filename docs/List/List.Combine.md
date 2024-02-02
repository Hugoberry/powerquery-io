---
title: List.Combine
---

# List.Combine


## Description

Returns a single list by combining multiple lists.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Takes a list of lists, <code>lists</code>, and merges them into a single new list.


## Examples

### Example #1 
Combine the two simple lists \{1, 2} and \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Combine the two lists, \{1, 2} and \{3, \{4, 5}}, one of which contains a nested list.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
