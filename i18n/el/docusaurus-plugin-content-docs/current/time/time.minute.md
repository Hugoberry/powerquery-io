---
title: Time.Minute
---

# Time.Minute


Επιστρέφει το στοιχείο λεπτού.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Επιστρέφει το στοιχείο λεπτού της παρεχόμενης τιμής `time`, `datetime` ή `datetimezone`, `dateTime`.


## Examples

### Example #1
Βρείτε το λεπτό στην #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
