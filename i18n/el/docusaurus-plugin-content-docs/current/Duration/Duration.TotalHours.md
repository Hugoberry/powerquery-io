---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Επιστρέφει τις συνολικές ώρες στις οποίες εκτείνεται αυτή η διάρκεια.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Επιστρέφει τις συνολικές ώρες που εκτείνονται κατά <code>duration</code>.


## Examples

### Example #1 
Βρείτε τις συνολικές ώρες που εκτείνονται από μια τιμή διάρκειας.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
