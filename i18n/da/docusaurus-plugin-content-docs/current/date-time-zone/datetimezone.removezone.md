---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Fjerner tidszoneoplysninger fra den angivne værdi for datetimezone.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Returnerer en værdi af typen #datetime fra <code>dateTimeZone</code>, hvor tidszoneoplysningerne er fjernet.


## Examples

### Example #1 
Fjern tidszoneoplysninger fra den angivne værdi for #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
