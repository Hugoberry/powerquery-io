---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Υποδεικνύει αν η τιμή είναι περιττή.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Υποδεικνύει αν η τιμή είναι περιττή. Επιστρέφει <code>true</code> εάν το <code>number</code> είναι περιττός αριθμός, διαφορετικά <code>false</code>.


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
