---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Επιστρέφει τα συνολικά δευτερόλεπτα στα οποία εκτείνεται αυτή η διάρκεια.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Επιστρέφει τα συνολικά δευτερόλεπτα που εκτείνονται κατά `duration`.


## Examples

### Example #1
Βρείτε τα συνολικά δευτερόλεπτα που εκτείνονται από μια τιμή διάρκειας.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
