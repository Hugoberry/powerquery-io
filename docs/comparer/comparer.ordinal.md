---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Returns a comparer function which uses Ordinal rules to compare values.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Returns a comparer function which uses Ordinal rules to compare the provided values `x` and `y`.  
  
A comparer function accepts two arguments and returns -1, 0, or 1 based on whether the first value is less than, equal to, or greater than the second.


## Examples

### Example #1
Using Ordinal rules, compare if "encyclopædia" and "encyclopaedia" are equivalent. Note these are equivalent using `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
