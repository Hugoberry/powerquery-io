---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Angiver, om denne dato indtræffer i løbet af den aktuelle uge i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af den aktuelle uge i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.      <ul>      <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, der skal evalueres.</li>      </ul>


## Examples

### Example #1 
Afgør, om det aktuelle systemklokkeslæt ligger i den aktuelle uge.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
