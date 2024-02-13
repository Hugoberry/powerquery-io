---
title: Number.Sign
---

# Number.Sign


Returns 1 if the number is positive, -1 if it is negative, and 0 if it is zero.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Returns 1 for if <code>number</code> is a positive number, -1 if it is a negative number, and 0 if it is zero.    If <code>number</code> is null, <code>Number.Sign</code> returns null.


## Examples

### Example #1 
Determine the sign of 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Determine the sign of -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Determine the sign of 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
