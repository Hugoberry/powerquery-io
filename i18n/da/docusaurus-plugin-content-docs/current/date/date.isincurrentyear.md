---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Angiver, om denne dato indtræffer i løbet af det aktuelle år i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det aktuelle år i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone`, der skal evalueres.


## Examples

### Example #1
Afgør, om det aktuelle systemklokkeslæt ligger i det aktuelle år.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
