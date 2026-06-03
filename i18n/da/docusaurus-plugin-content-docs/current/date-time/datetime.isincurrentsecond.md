---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Angiver, om denne datetime optræder i løbet af det aktuelle sekund, sådan som det er bestemt af den aktuelle dato og tid på systemet.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den angivne værdi af typen datetime `dateTime` optræder i løbet af det aktuelle sekund, sådan som det er bestemt af den aktuelle dato og tid på systemet.

-   `dateTime`: En værdi for koden `datetime` eller `datetimezone`, der skal evalueres.


## Examples

### Example #1
Bestem, om den aktuelle systemtid er i det aktuelle sekund.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
