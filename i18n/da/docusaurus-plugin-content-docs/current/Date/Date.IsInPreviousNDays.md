---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Angiver, om denne dato er indtruffet i løbet af det forrige antal dage, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det forrige antal dage i forhold til den aktuelle dato og det aktuelle klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.      <ul>      <li><code>dateTime</code>: En <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      <li><code>days</code>: Antallet af dage.</li>      </ul>


## Examples

### Example #1 
Afgør, om dagen før det aktuelle systemklokkeslæt ligger på de forrige to dage.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
