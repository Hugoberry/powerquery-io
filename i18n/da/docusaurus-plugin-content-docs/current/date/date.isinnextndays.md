---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Angiver, om denne dato indtræffer i løbet af det næste antal dage, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det næste antal dage, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for den aktuelle dag.

-   `dateTime`: En `dato`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.
-   `days`: Antallet af dage.


## Examples

### Example #1
Afgør, om dagen efter det aktuelle systemklokkeslæt ligger i de næste to dage.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
