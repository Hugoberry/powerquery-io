---
title: Time.Hour
---

# Time.Hour


## Description

Επιστρέφει το στοιχείο ώρας.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Επιστρέφει το στοιχείο ώρας της παρεχόμενης τιμής <code>time</code>, <code>datetime</code> ή <code>datetimezone</code>, <code>dateTime</code>.


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
