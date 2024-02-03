---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Angiver, om denne dato indtræffer i løbet af det næste antal år, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle år.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det næste antal år, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle år.      <ul>      <li><code>dateTime</code>: En <code>dato</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      <li><code>years</code>: Antallet af år.</li>      </ul>


## Examples

### Example #1 
Afgør, om året efter det aktuelle systemklokkeslæt ligger i de næste to år.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
