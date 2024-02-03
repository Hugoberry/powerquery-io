---
title: DateTime.Time
---

# DateTime.Time


## Description

Επιστρέφει το τμήμα ώρας της δεδομένης τιμής datetime.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Επιστρέφει το τμήμα ώρας της δεδομένης τιμής datetime <code>dateTime</code>.


## Examples

### Example #1 
Βρείτε την τιμή ώρας της #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
