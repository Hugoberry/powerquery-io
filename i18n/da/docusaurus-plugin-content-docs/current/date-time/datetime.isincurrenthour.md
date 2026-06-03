---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Angiver, om denne datetime optræder i løbet af den aktuelle time, sådan som det er bestemt af den aktuelle dato og tid på systemet.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den angivne værdi af typen datetime `dateTime` optræder i løbet af den aktuelle time, sådan som det er bestemt af den aktuelle dato og tid på systemet.

-   `dateTime`: En værdi for koden `datetime` eller `datetimezone`, der skal evalueres.


## Examples

### Example #1
Bestem, om den aktuelle systemtid er i den aktuelle time.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
