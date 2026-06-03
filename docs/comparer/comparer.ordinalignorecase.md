---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Returns a case-insensitive comparer function which uses Ordinal rules to compare values.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Returns a case-insensitive comparer function which uses Ordinal rules to compare the provided values `x` and `y`.  
  
A comparer function accepts two arguments and returns -1, 0, or 1 based on whether the first value is less than, equal to, or greater than the second.


## Examples

### Example #1
Using case-insensitive Ordinal rules, compare "Abc" with "abc". Note "Abc" is less than "abc" using `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
