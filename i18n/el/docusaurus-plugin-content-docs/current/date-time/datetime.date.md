---
title: DateTime.Date
---

# DateTime.Date


Επιστρέφει το στοιχείο ημερομηνίας της δεδομένης τιμής date, datetime ή datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Επιστρέφει το στοιχείο ημερομηνίας της παραμέτρου `dateTime` εάν η παράμετρος είναι τιμή `ημερομηνία`, `datetime`, ή `datetimezone` ή `null` εάν η παράμετρος είναι `null`.


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
