---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Αλλάζει τη ζώνη ώρας της τιμής.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Αλλάζει τις πληροφορίες ζώνης ώρας στην τιμή datetimezone `dateTimeZone` με τις νέες πληροφορίες ζώνης ώρας που παρέχονται από την `timezoneHours` και προαιρετικά από την `timezoneMinutes`. Αν η `dateTimeZone` δεν έχει στοιχείο ζώνης ώρας, προκύπτει σφάλμα.


## Examples

### Example #1
Αλλάξτε τις πληροφορίες ζώνης ώρας για την #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) σε 8 ώρες.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Αλλάξτε τις πληροφορίες ζώνης ώρας για την #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) σε -30 λεπτά.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
