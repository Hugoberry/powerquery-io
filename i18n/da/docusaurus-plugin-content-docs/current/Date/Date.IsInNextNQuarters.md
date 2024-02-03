---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Angiver, om denne dato indtræffer i løbet af det næste antal kvartaler, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det næste antal kvartaler, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.      <ul>      <li><code>dateTime</code>: En <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      <li><code>quarters</code>: Antallet af kvartaler.</li>      </ul>


## Examples

### Example #1 
Afgør, om kvartalet efter det aktuelle systemklokkeslæt ligger i de næste to kvartaler.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
