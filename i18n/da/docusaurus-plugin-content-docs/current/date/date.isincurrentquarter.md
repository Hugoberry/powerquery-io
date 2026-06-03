---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Angiver, om denne dato indtræffer i løbet af det aktuelle kvartal i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det aktuelle kvartal i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone`, der skal evalueres.


## Examples

### Example #1
Afgør, om det aktuelle systemklokkeslæt ligger i det aktuelle kvartal.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
