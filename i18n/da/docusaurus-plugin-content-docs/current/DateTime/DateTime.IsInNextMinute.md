---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Angiver, om denne datetime indtræffer i løbet af det næste minut, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle minut.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det næste minut, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle minut.      <ul>      <li><code>dateTime</code>: En <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      </ul>


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
