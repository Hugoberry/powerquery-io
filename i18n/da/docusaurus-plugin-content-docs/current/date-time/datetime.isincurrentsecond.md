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

Angiver, om den angivne værdi af typen datetime <code>dateTime</code> optræder i løbet af det aktuelle sekund, sådan som det er bestemt af den aktuelle dato og tid på systemet.      <ul>      <li><code>dateTime</code>: En værdi for koden <code>datetime</code> eller <code>datetimezone</code>, der skal evalueres.</li>      </ul>


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
