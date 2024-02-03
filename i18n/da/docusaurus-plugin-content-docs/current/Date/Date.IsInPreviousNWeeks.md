---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Angiver, om denne dato indtræffer i løbet af det forrige antal uger, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle uge.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det forrige antal uger, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer værdien False, når den modtager en værdi, der indtræffer i løbet af den aktuelle uge.       <ul>      <li><code>dateTime</code>: En <code>dato</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      <li><code>weeks</code>: Antallet af uger.</li>      </ul>


## Examples

### Example #1 
Afgør, om ugen før det aktuelle systemklokkeslæt ligger i de forrige to uger.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
