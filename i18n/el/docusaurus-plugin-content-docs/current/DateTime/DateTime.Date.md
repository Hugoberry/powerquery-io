---
title: DateTime.Date
---

# DateTime.Date


## Description

Επιστρέφει το στοιχείο ημερομηνίας της δεδομένης τιμής date, datetime ή datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Επιστρέφει το στοιχείο ημερομηνίας της <code>dateTime</code>, τη δεδομένη τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.


## Examples

### Example #1 
Βρείτε την τιμή ημερομηνίας της #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
