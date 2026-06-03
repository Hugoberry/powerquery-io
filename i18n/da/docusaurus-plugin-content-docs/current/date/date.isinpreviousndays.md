---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Angiver, om denne dato er indtruffet i løbet af det forrige antal dage, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det forrige antal dage i forhold til den aktuelle dato og det aktuelle klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.

-   `dateTime`: En `date`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.
-   `days`: Antallet af dage.


## Examples

### Example #1
Afgør, om dagen før det aktuelle systemklokkeslæt ligger på de forrige to dage.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
