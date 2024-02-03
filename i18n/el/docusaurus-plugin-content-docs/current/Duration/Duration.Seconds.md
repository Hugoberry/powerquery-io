---
title: Duration.Seconds
---

# Duration.Seconds


## Description

Επιστρέφει το τμήμα δευτερολέπτων μιας διάρκειας.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

Επιστρέφει το τμήμα δευτερολέπτων του <code>duration</code>.


## Examples

### Example #1 
Εξαγάγετε τα δευτερόλεπτα από μια τιμή διάρκειας.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
