---
title: Duration.TotalHours
---

# Duration.TotalHours


Επιστρέφει τις συνολικές ώρες στις οποίες εκτείνεται αυτή η διάρκεια.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Επιστρέφει τις συνολικές ώρες που εκτείνονται κατά `duration`.


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
