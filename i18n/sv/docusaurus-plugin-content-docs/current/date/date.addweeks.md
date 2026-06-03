---
title: Date.AddWeeks
---

# Date.AddWeeks


Lägger till angivna veckor i datumet.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Returnerar `date`\-, `datetime`\- eller `datetimezone`\-resultatet när `numberOfWeeks` veckor har lagts till i `datetime`\-värdet `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- eller `datetimezone`\-värdet som veckor läggs till i.
-   `numberOfWeeks`: Antalet veckor som ska läggas till.


## Examples

### Example #1
Lägg till 2 veckor i `date`\-, `datetime`\- eller `datetimezone`\-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
