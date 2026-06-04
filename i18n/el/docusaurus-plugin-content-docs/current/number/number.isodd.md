---
title: Number.IsOdd
---

# Number.IsOdd


Υποδεικνύει αν η τιμή είναι περιττή.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Υποδεικνύει αν η τιμή είναι περιττή. Επιστρέφει `true` εάν το `number` είναι περιττός αριθμός, διαφορετικά `false`.


## Examples

### Example #1
Ελέγξτε αν το 625 είναι περιττός αριθμός.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Ελέγξτε αν το 82 είναι περιττός αριθμός.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
