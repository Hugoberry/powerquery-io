---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Επιστρέφει την αρχή της ημέρας.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Επιστρέφει την αρχή της ημέρας που αντιπροσωπεύεται από <code>dateTime</code>.    <code>dateTime</code> πρέπει να είναι μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.


## Examples

### Example #1 
Βρείτε την αρχή της ημέρας για τις 10 Οκτωβρίου 2011, 8:00 π.μ.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
