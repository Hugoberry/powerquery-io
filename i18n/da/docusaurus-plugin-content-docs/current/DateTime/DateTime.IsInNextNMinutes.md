---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Angiver, om denne datetime indtræffer i løbet af det næste antal minutter, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle minut.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det næste antal minutter, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle minut.      <ul>      <li><code>dateTime</code>: En <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      <li><code>minutes</code>: Antallet af minutter.</li>      </ul>


## Examples

### Example #1 
Bestem, om minuttet efter den aktuelle systemtid er i de næste to minutter.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
