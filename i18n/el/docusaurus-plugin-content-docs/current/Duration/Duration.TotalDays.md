---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Επιστρέφει τις συνολικές ημέρες στις οποίες εκτείνεται αυτή η διάρκεια.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Επιστρέφει τις συνολικές ημέρες που εκτείνονται κατά <code>duration</code>.


## Examples

### Example #1 
Βρείτε τις συνολικές ημέρες που εκτείνονται από μια τιμή διάρκειας.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
