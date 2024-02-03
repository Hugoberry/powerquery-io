---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Επιστρέφει την αρχή του τριμήνου.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Επιστρέφει την αρχή του τριμήνου που περιέχει <code>dateTime</code>.     <code>dateTime</code> πρέπει να είναι μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.


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
