---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Angiver, om denne dato er indtruffet i løbet af den forrige uge, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for den aktuelle uge.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` er indtruffet i løbet af den forrige uge, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for den aktuelle uge.

-   `dateTime`: En `dato`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.


## Examples

### Example #1
Afgør, om ugen før det aktuelle systemklokkeslæt ligger i den forrige uge.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
