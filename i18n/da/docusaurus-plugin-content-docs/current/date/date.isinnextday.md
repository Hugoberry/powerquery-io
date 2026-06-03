---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Angiver, om denne dato indtræffer i løbet af den næste dag, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer den næste dag, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle dag.

-   `dateTime`: En `date`, `datetime`, or `datetimezone` værdi, der skal evalueres.


## Examples

### Example #1
Afgør, om dagen efter det aktuelle systemklokkeslæt ligger på den næste dag.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
