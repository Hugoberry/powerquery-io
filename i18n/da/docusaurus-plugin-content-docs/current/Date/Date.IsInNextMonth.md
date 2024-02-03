---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Angiver, om denne dato indtræffer i løbet af den næste måned, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle måned.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer den næste måned, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle måned.      <ul>      <li><code>dateTime</code>: En <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> værdi, der skal evalueres.</li>      </ul>


## Examples

### Example #1 
Afgør, om måneden efter det aktuelle systemklokkeslæt ligger i den næste måned.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
