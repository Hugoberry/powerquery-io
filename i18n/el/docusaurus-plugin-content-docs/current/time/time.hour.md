---
title: Time.Hour
---

# Time.Hour


Επιστρέφει το στοιχείο ώρας.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Επιστρέφει το στοιχείο ώρας της παρεχόμενης τιμής `time`, `datetime` ή `datetimezone`, `dateTime`.


## Examples

### Example #1
Βρείτε την ώρα στην #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
