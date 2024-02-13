---
title: Number.IsNaN
---

# Number.IsNaN


Indicates if the value is NaN (Not a number).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indicates if the value is NaN (Not a number). Returns <code>true</code> if <code>number</code> is equivalent to <code>Number.IsNaN</code>, <code>false</code> otherwise.


## Examples

### Example #1 
Check if 0 divided by 0 is NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Check if 1 divided by 0 is NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
