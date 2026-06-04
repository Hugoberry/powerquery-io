---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Καταργεί τις πληροφορίες ζώνης ώρας από την τιμή της datetimezone που δόθηκε.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Επιστρέφει μια τιμή #datetime από την `dateTimeZone` έχοντας καταργήσει τις πληροφορίες ζώνης ώρας.


## Examples

### Example #1
Καταργήστε τις πληροφορίες ζώνης ώρας από την τιμή #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
