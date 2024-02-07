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

Angiver, om den angivne værdi af typen datetime <code>dateTime</code> optræder i løbet af den aktuelle time, sådan som det er bestemt af den aktuelle dato og tid på systemet.      <ul>      <li><code>dateTime</code>: En værdi for koden <code>datetime</code> eller <code>datetimezone</code>, der skal evalueres.</li>      </ul>


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
