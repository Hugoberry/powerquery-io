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

Angiver, om den angivne værdi af typen datetime <code>dateTime</code> optræder i løbet af det aktuelle minut, sådan som det er bestemt af den aktuelle dato og tid på systemet.      <ul>      <li><code>dateTime</code>: En værdi af typen <code>datetime</code> eller <code>datetimezone</code>, som skal evalueres.</li>      </ul>


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
