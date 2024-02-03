---
title: Duration.Hours
---

# Duration.Hours


## Description

Επιστρέφει το τμήμα ωρών μιας διάρκειας.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Επιστρέφει το τμήμα ωρών του <code>duration</code>.


## Examples

### Example #1 
Εξαγάγετε τις ώρες από μια τιμή διάρκειας.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
