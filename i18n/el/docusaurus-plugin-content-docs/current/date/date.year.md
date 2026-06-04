---
title: Date.Year
---

# Date.Year


Επιστρέφει το στοιχείο έτους.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Επιστρέφει το στοιχείο έτους της παρεχόμενης τιμής `datetime`, `dateTime`.


## Examples

### Example #1
Βρείτε το έτος στην #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
