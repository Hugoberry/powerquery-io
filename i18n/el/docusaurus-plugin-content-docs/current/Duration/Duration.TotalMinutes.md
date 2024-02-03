---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Επιστρέφει τα συνολικά λεπτά στα οποία εκτείνεται αυτή η διάρκεια.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Επιστρέφει τα συνολικά λεπτά που εκτείνονται κατά <code>duration</code>.


## Examples

### Example #1 
Βρείτε τα συνολικά λεπτά που εκτείνονται από μια τιμή διάρκειας.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
