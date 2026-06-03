---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Angiver, om denne datetime indtræffer i løbet af det næste sekund, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle sekund.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det næste sekund, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle sekund.

-   `dateTime`: En `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.


## Examples

### Example #1
Bestem, om sekundet efter den aktuelle systemtid er i det næste sekund.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
