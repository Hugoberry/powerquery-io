---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Angiver, om denne dato indtræffer i løbet af det næste antal kvartaler, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det næste antal kvartaler, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.

-   `dateTime`: En `date`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.
-   `quarters`: Antallet af kvartaler.


## Examples

### Example #1
Afgør, om kvartalet efter det aktuelle systemklokkeslæt ligger i de næste to kvartaler.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
