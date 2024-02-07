---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Konwertuje składnik strefy czasowej na strefę czasową UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Zmienia informacje dotyczące strefy czasowej w wartości typu datetime <code>dateTimeZone</code> na informacje dotyczące strefy czasowej czasu uniwersalnego (UTC).    Jeśli wartość <code>dateTimeZone</code> nie ma składnika strefy czasowej, dodawane są informacje dotyczące strefy czasowej UTC.


## Examples

### Example #1 
Zmień informacje dotyczące strefy czasowej dla wartości #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na strefę czasową UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
