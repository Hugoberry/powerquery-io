---
title: Date.Month
---

# Date.Month


Επιστρέφει το στοιχείο μήνα.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Επιστρέφει το στοιχείο μήνα της παρεχόμενης τιμής `datetime`, `dateTime`.


## Examples

### Example #1
Βρείτε το μήνα στην #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
