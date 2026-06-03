---
title: Date.AddDays
---

# Date.AddDays


Lägger till angivna dagar i datumet.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Returnerar `date`\-, `datetime`\- eller `datetimezone`\-resultatet när `numberOfDays` dagar har lagts till i `datetime`\-värdet `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- eller `datetimezone`\-värdet som dagar läggs till i.
-   `numberOfDays`: Antalet dagar som ska läggas till.


## Examples

### Example #1
Lägg till 5 dagar i `date`\-, `datetime`\- eller `datetimezone`\-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
