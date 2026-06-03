---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Angiver, om denne datetime er indtruffet i løbet af det forrige antal sekunder, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle sekund.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` er indtruffet i løbet af det forrige antal sekunder, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle sekund.

-   `dateTime`: En `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.
-   `seconds`: Antallet af sekunder.


## Examples

### Example #1
Bestem, om sekundet før den aktuelle systemtid er i de forrige to sekunder.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
