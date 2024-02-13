---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Angiver, om denne dato indtræffer i løbet af det næste antal måneder, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet aktuelle dato og tid på systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle måned.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det næste antal måneder, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle måned.      <ul>      <li><code>dateTime</code>: En <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.</li>      <li><code>months</code>: Antallet af måneder.</li>      </ul>


## Examples

### Example #1 
Afgør, om måneden efter det aktuelle systemklokkeslæt ligger i de næste to måneder.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
