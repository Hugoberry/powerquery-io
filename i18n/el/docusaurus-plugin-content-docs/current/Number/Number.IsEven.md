---
title: Number.IsEven
---

# Number.IsEven


## Description

Υποδεικνύει αν η τιμή είναι άρτια.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

Υποδεικνύει αν η τιμή, <code>number</code>, είναι άρτια επιστρέφοντας <code>true</code> εάν είναι, διαφορετικά <code>false</code>.


## Examples

### Example #1 
Ελέγξτε αν το 625 είναι άρτιος αριθμός.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Ελέγξτε αν το 82 είναι άρτιος αριθμός.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
