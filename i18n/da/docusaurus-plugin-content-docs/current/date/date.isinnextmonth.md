---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Angiver, om denne dato indtræffer i løbet af den næste måned, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle måned.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer den næste måned, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle måned.

-   `dateTime`: En `date`, `datetime`, or `datetimezone` værdi, der skal evalueres.


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
