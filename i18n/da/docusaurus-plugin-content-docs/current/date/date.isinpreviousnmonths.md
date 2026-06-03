---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Angiver, om denne dato er indtruffet i løbet af det forrige antal måneder, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for den aktuelle måned.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det forrige antal måneder, fastlagt i forhold aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle måned.

-   `dateTime`: En `date`\-, `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.
-   `months`: Antallet af måneder.


## Examples

### Example #1
Afgør, om måneden før det aktuelle systemklokkeslæt ligger i de forrige to måneder.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
