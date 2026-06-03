---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Angiver, om denne datetime er i løbet af det næste antal sekunder, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle sekund.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det næste antal sekunder, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet det aktuelle sekund.

-   `dateTime`: En `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.
-   `seconds`: Antallet af sekunder.


## Examples

### Example #1
Bestem, om sekundet efter den aktuelle systemtid er i de næste to sekunder.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
