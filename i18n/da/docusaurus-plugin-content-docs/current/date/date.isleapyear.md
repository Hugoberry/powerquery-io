---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Angiver, om denne dato ligger i et skudår.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` ligger i et skudår.

-   `dateTime`: En værdi af typen `date`, `datetime` eller `datetimezone`, der skal evalueres.


## Examples

### Example #1
Afgør, om året 2012, som repræsenteres ved `#date(2012, 01, 01)`, er et skudår.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
