---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


## Description

Angiver, om denne datetime er indtruffet i løbet af det forrige minut, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for det aktuelle minut.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> er indtruffet i løbet af det forrige minut, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for det aktuelle minut.      <ul> <li><code>dateTime</code>: En <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.      </li>      </ul>


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
