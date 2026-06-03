---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Angiver, om denne dato er indtruffet i løbet af det forrige antal år, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle år.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` er indtruffet i løbet af det forrige antal år, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet.

-   `dateTime`: En `date`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.
-   `years`: Antallet af år.


## Examples

### Example #1
Afgør, om året før det aktuelle systemklokkeslæt ligger i de forrige to år.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
