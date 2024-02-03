---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Μετατρέπει το στοιχείο ζώνης ώρας στην τοπική ζώνη ώρας.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Αλλάζει τις πληροφορίες ζώνης της τιμής datetimezone <code>dateTimeZone</code> με τις πληροφορίες της τοπικής ζώνης ώρας.    Εάν η <code>dateTimeZone</code> δεν διαθέτει στοιχείο ζώνης ώρας, προστίθενται οι πληροφορίες της τοπικής ζώνης ώρας.


## Examples

### Example #1 
Αλλάξτε τις πληροφορίες ζώνης ώρας για την #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) στην τοπική ζώνη ώρας (έστω PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
