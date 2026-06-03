---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Angiver, om denne dato indtræffer i løbet næste kvartal, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

,Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det næste kvartal, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.

-   `dateTime`: En `dato`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.


## Examples

### Example #1
Afgør, om kvartalet efter det aktuelle systemklokkeslæt ligger i det næste kvartal.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
