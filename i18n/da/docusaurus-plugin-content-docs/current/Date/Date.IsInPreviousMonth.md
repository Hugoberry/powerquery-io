---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Angiver, om denne dato er indtruffet i løbet af den forrige måned, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle måned.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> er indtruffet i løbet af den forrige måned, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle måned.      <ul> <li><code>dateTime</code>: En <code>dato</code>-, <code>datetime</code>- eller <code>datetimezone</code>-værdi, der skal evalueres.      </li>      </ul>


## Examples

### Example #1 
Afgør, om måneden før det aktuelle systemklokkeslæt ligger i den forrige måned.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
