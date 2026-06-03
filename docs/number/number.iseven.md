---
title: Number.IsEven
---

# Number.IsEven


Indicates if the value is even.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Indicates if the value, `number`, is even by returning `true` if it is even, `false` otherwise.


## Examples

### Example #1
Check if 625 is an even number.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Check if 82 is an even number.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
