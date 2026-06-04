---
title: Date.StartOfYear
---

# Date.StartOfYear


Επιστρέφει την αρχή του έτους.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Επιστρέφει την αρχή του έτους που περιέχει `dateTime`. `dateTime` πρέπει να είναι μια τιμή `date`, `datetime` ή `datetimezone`.


## Examples

### Example #1
Βρείτε την αρχή του έτους για τις 10 Οκτωβρίου 2011, 8:10:32 π.μ.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
