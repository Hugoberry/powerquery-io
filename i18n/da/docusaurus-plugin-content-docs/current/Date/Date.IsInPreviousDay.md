---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


## Description

Angiver, om denne dato er indtruffet i løbet af den forrige dag, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> er indtruffet i løbet af den forrige dag, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.      <ul> <li><code>dateTime</code>: En <code>dato</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.      </li>      </ul>


## Examples

### Example #1 
Afgør, om dagen før det aktuelle systemklokkeslæt ligger på den forrige dag.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
