---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Μετατρέπει το στοιχείο ζώνης ώρας στη ζώνη ώρας UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Αλλάζει τις πληροφορίες ζώνης της τιμής datetime `dateTimeZone` με τις πληροφορίες της ζώνης ώρας UTC ή παγκόσμιας ώρας. Εάν η `dateTimeZone` δεν διαθέτει στοιχείο ζώνης ώρας, προστίθενται οι πληροφορίες της ζώνης ώρας UTC.


## Examples

### Example #1
Αλλάξτε τις πληροφορίες ζώνης ώρας για την #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) σε ζώνη ώρας UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
