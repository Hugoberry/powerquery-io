---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Returns a comparer function based on the specified culture and case-sensitivity.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Returns a comparer function that uses the `culture` and the case-sensitivity specified by `ignoreCase` to perform comparisons.  
  
A comparer function accepts two arguments and returns -1, 0, or 1 based on whether the first value is less than, equal to, or greater than the second.  
  
The default value for `ignoreCase` is false. The `culture` should be one of the locales supported by the .NET framework (for example, "en-US").


## Examples

### Example #1
Compare "a" and "A" using "en-US" locale to determine if the values are equal.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Compare "a" and "A" using "en-US" locale ignoring the case to determine if the values are equal.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
