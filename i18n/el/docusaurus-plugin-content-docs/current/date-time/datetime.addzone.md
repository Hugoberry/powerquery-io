---
title: DateTime.AddZone
---

# DateTime.AddZone


Προσθέτει πληροφορίες ζώνης ώρας στην τιμή ημερομηνίας/ώρας.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Προσθέτει πληροφορίες ζώνης ώρας στην τιμή `dateTime`. Οι πληροφορίες ζώνης ώρας περιλαμβάνουν `timezoneHours` και προαιρετικά `timezoneMinutes`, οι οποίες καθορίζουν την επιθυμητή μετατόπιση από την ώρα UTC.


## Examples

### Example #1
Ορίστε τη ζώνη ώρας σε UTC+7:30 (7 ώρες και 30 λεπτά μετά την UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
