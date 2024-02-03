---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Angiver, om denne datetime er indtruffet i løbet af den forrige time, fastlagt i forhold til den aktuelle dato og tid i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle time.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> er indtruffet i løbet af den forrige time, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for den aktuelle time.      <ul> <li><code>dateTime</code>: En <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.      </li>      </ul>


## Examples

### Example #1 
Bestem, om timen før den aktuelle systemtid er i den forrige time.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
