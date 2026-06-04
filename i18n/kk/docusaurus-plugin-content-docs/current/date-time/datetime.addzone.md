---
title: DateTime.AddZone
---

# DateTime.AddZone


Күні/уақыты мәніне уақыт белдеуі ақпаратын қосады.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

`dateTime` мәніне уақыт белдеуі ақпаратын қосады. Уақыт белдеуі ақпараты `timezoneHours` және таңдау бойынша `timezoneMinutes` (ол UTC уақытынан қалаған ауытқуды көрсетеді) қамтиды.


## Examples

### Example #1
Уақыт белдеуін UTC+7:30 (UTC-ден 7 сағат және 30 минут кейін) деп орнатады.
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
