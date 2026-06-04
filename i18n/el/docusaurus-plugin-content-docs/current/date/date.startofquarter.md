---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Επιστρέφει την αρχή του τριμήνου.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Επιστρέφει την αρχή του τριμήνου που περιέχει `dateTime`. `dateTime` πρέπει να είναι μια τιμή `date`, `datetime` ή `datetimezone`.


## Examples

### Example #1
Βρείτε την αρχή του τριμήνου για τις 10 Οκτωβρίου 2011, 8:00 π.μ.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
