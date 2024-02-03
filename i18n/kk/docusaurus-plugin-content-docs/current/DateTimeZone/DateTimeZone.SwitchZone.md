---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Мәннің уақыт белдеуін өзгертеді.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

<code>dateTimeZone</code> күн және уақыт белдеуі мәніндегі уақыт белдеуі туралы ақпаратты <code>timezoneHours</code> және таңдау бойынша <code>timezoneMinutes</code> қамтамасыз еткен жаңа уақыт белдеуі туралы ақпаратқа өзгертеді.    Егер <code>dateTimeZone</code> мәнінде уақыт белдеуі құрамдасы болмаса, ерекшелік туралы хабар көрсетіледі.


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
