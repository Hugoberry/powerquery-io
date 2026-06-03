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

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af den aktuelle uge i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone`, der skal evalueres.


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
