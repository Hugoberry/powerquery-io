---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Angiver, om denne dato indtræffer i løbet af det næste antal dage, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det næste antal dage, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for den aktuelle dag.      <ul>      <li><code>dateTime</code>: En <code>dato</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      <li><code>days</code>: Antallet af dage.</li>      </ul>


## Examples

### Example #1 
Afgør, om dagen efter det aktuelle systemklokkeslæt ligger i de næste to dage.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
