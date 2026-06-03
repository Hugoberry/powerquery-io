---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Angiver, om denne datetime optræder i løbet af det aktuelle minut, sådan som det er bestemt af den aktuelle dato og tid på systemet.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den angivne værdi af typen datetime `dateTime` optræder i løbet af det aktuelle minut, sådan som det er bestemt af den aktuelle dato og tid på systemet.

-   `dateTime`: En værdi af typen `datetime` eller `datetimezone`, som skal evalueres.


## Examples

### Example #1
Bestem, hvis den aktuelle systemtid er i det aktuelle minut.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
