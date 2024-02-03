---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Υποδεικνύει αν η τιμή είναι NaN (δεν είναι αριθμός).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Υποδεικνύει αν η τιμή είναι NaN (δεν είναι αριθμός). Επιστρέφει <code>true</code> εάν το <code>number</code> ισοδυναμεί με την <code>Number.IsNaN</code>, διαφορετικά <code>false</code>.


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
