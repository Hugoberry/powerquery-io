---
title: Number.Log
---

# Number.Log


Returns the logarithm of the number to the specified base (default e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Returns the logarithm of a number, <code>number</code>, to the specified <code>base</code> base. If <code>base</code> is not specified, the default value is Number.E.    If <code>number</code> is null <code>Number.Log</code> returns null.


## Examples

### Example #1 
Get the base 10 logarithm of 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Get the base e logarithm of 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
