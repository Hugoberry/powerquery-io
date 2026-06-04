---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Мәннің уақыт белдеуін өзгертеді.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

`dateTimeZone` күн және уақыт белдеуі мәніндегі уақыт белдеуі туралы ақпаратты `timezoneHours` және таңдау бойынша `timezoneMinutes` қамтамасыз еткен жаңа уақыт белдеуі туралы ақпаратқа өзгертеді. Егер `dateTimeZone` мәнінде уақыт белдеуі құрамдасы болмаса, қате туады.


## Examples

### Example #1
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) үшін уақыт белдеуі туралы ақпаратты 8 сағатқа өзгерту.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) үшін уақыт белдеуі туралы ақпаратты -30 минутқа өзгерту.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
