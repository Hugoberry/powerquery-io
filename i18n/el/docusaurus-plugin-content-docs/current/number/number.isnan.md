---
title: Number.IsNaN
---

# Number.IsNaN


Υποδεικνύει αν η τιμή είναι NaN (δεν είναι αριθμός).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indicates if the value is NaN (Not a number). Returns `true` if `number` is equivalent to `Number.NaN`, `false` otherwise.


## Examples

### Example #1
Ελέγξτε αν το 0 διά 0 είναι NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Ελέγξτε αν το 1 διά 0 είναι NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
