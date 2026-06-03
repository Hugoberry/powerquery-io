---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Angiver, om denne dato indtræffer i løbet af det aktuelle år og er på eller før den aktuelle dag i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` indtræffer i løbet af det aktuelle år og er på eller før den aktuelle dag i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone`, der skal evalueres.


## Examples

### Example #1
Afgør, om det aktuelle systemklokkeslæt ligger i år til dato.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
