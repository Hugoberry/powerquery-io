---
title: Date.AddMonths
---

# Date.AddMonths


Lägger till angivna månader i datumet.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Returnerar `date`\-, `datetime`\- eller `datetimezone`\-resultatet när `numberOfMonths` månader har lagts till i `datetime`\-värdet `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- eller `datetimezone`\-värdet som månader läggs till i.
-   `numberOfMonths`: Antalet månader som ska läggas till.


## Examples

### Example #1
Lägg till 5 månader i `date`\-, `datetime`\- eller `datetimezone`\-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Lägg till 18 månader i `date`\-, `datetime`\- eller `datetimezone`\-värdet som representerar datumet och tiden motsvarande den 14 maj 2011 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
