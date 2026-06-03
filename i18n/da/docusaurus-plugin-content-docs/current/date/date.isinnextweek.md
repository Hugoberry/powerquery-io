---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Angiver, om denne dato indtræffer i løbet af den næste uge, fastlagt i forhold til aktuel dato og aktuelt klokkesæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle uge.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af den næste uge, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle uge.

-   `dateTime`: En `dato`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.


## Examples

### Example #1
Afgør, om ugen efter det aktuelle systemklokkeslæt ligger i den næste uge.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
