---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Angiver, om denne datetime er indtruffet i løbet af det forrige minut, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for det aktuelle minut.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` er indtruffet i løbet af det forrige minut, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for det aktuelle minut.

-   `dateTime`: En `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.


## Examples

### Example #1
Bestem, om minuttet før den aktuelle systemtid er i det forrige minut.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
