---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Επιστρέφει την αρχή του μήνα.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Επιστρέφει την αρχή του μήνα που περιέχει `dateTime`. `dateTime` πρέπει να είναι μια τιμή `date` ή `datetime`.


## Examples

### Example #1
Βρείτε την αρχή του μήνα για τις 10 Οκτωβρίου 2011, 8:10:32 π.μ.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
