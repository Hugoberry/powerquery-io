---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Angiver, om denne dato er indtruffet i løbet af det forrige antal år, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle år.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi <code>dateTime</code> er indtruffet i løbet af det forrige antal år, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet.      <ul>      <li><code>dateTime</code>: En <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      <li><code>years</code>: Antallet af år.</li>      </ul>


## Examples

### Example #1 
Afgør, om året før det aktuelle systemklokkeslæt ligger i de forrige to år.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
