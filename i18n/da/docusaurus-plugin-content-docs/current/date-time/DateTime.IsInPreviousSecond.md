---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Angiver, om denne datetime er indtruffet i løbet af det forrige sekund, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle sekund.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi <code>dateTime</code> er indtruffet i løbet af det forrige sekund, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer false, når den modtager en værdi, der indtræffer i løbet af det aktuelle sekund.      <ul> <li><code>dateTime</code>: En <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.      </li>      </ul>


## Examples

### Example #1 
Bestem, om sekundet før den aktuelle systemtid er i det forrige sekund.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
