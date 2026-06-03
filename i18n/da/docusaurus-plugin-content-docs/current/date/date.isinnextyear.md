---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Angiver, om denne dato indtræffer i løbet af det næste år, fastlagt i forhold til aktuel dato og aktuelt klokkesæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle år.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det næste år, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle år.

-   `dateTime`: En `dato`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.


## Examples

### Example #1
Afgør, om året efter det aktuelle systemklokkeslæt ligger i det næste år.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
