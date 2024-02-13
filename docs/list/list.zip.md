---
title: List.Zip
---

# List.Zip


Returns a list of lists by combining items at the same position in multiple lists.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Remarks

Takes a list of lists, <code>lists</code>, and returns a list of lists combining items at the same position.


## Examples

### Example #1 
Zips the two simple lists \{1, 2} and \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Zips the two simple lists of different lengths \{1, 2} and \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
