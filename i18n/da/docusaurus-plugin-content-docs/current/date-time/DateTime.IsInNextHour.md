---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Angiver, om denne datetime indtræffer i løbet af den næste time, fastlagt i forhold til den aktuelle dato og tid i systemet. Bemærk, at denne funktion returnerer False, når der sendes en værdi, der indtræffer i løbet af den aktuelle time.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af den næste time, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle time.      <ul>      <li><code>dateTime</code>: En <code>datetime</code>, or <code>datetimezone</code> værdi, der skal evalueres.</li>      </ul>


## Examples

### Example #1 
Bestem, om timen efter den aktuelle systemtid er i den næste time.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
