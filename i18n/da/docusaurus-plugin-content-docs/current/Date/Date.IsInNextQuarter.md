---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Angiver, om denne dato indtræffer i løbet næste kvartal, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

,Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det næste kvartal, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.      <ul> <li><code>dateTime</code>: En <code>dato</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.      </li>      </ul>


## Examples

### Example #1 
Afgør, om kvartalet efter det aktuelle systemklokkeslæt ligger i det næste kvartal.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
