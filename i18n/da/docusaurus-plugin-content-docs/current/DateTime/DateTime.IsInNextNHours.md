---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Angiver, om denne datetime optræder i løbet af det næste antal timer, fastlagt i forhold til den aktuelle dato og tid i systemet. Bemærk, at denne funktion returnerer false, når den modtager en værdi, der opstår inden for den aktuelle time.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det næste antal timer, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle time.      <ul>      <li><code>dateTime</code>: En <code>datetime</code>- eller <code>datetimezone</code>-værdi, som skal evalueres.</li>      <li><code>hours</code>: Antallet af timer.</li>      </ul>


## Examples

### Example #1 
Bestem, om timen efter den aktuelle systemtid er i de næste to timer.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
