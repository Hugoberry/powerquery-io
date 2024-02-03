---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Επιστρέφει την αρχή του μήνα.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Επιστρέφει την αρχή του μήνα που περιέχει <code>dateTime</code>.    <code>dateTime</code> πρέπει να είναι μια τιμή <code>date</code> ή <code>datetime</code>.


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
