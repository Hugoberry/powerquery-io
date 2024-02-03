---
title: Date.Month
---

# Date.Month


## Description

Επιστρέφει το στοιχείο μήνα.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Επιστρέφει το στοιχείο μήνα της παρεχόμενης τιμής <code>datetime</code>, <code>dateTime</code>.


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
