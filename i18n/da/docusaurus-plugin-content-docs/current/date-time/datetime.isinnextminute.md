---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Angiver, om denne datetime indtræffer i løbet af det næste minut, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle minut.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det næste minut, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle minut.

-   `dateTime`: En `datetime`\- eller `datetimezone`\-værdi, der skal evalueres.


## Examples

### Example #1
Bestem, om minuttet efter den aktuelle systemtid er i det næste minut.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
