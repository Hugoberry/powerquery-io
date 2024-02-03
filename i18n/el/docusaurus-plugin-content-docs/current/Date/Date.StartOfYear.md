---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Επιστρέφει την αρχή του έτους.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Επιστρέφει την αρχή του έτους που περιέχει <code>dateTime</code>.    <code>dateTime</code> πρέπει να είναι μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.


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
