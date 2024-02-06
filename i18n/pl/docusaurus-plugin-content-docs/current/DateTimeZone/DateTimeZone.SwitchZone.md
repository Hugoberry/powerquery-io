---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Zmienia strefę czasową wartości.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Zmienia informacje dotyczące strefy czasowej w wartości typu datetimezone <code>dateTimeZone</code> na nowe informacje dotyczące strefy czasowej dostarczone w parametrze <code>timezoneHours</code> i opcjonalnie <code>timezoneMinutes</code>.    Jeśli wartość <code>dateTimeZone</code> nie ma składnika strefy czasowej, jest zgłaszany wyjątek.


## Examples

### Example #1 
Zmień informacje dotyczące strefy czasowej dla wartości typu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na 8 godzin.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Zmień informacje dotyczące strefy czasowej dla wartości #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na -30 minut.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
