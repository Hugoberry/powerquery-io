---
title: Date.AddQuarters
---

# Date.AddQuarters


Lägger till angivna kvartal i datumet.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Returnerar `date`\-, `datetime`\- eller `datetimezone`\-resultatet när `numberOfQuarters` kvartal har lagts till i `datetime`\-värdet `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- eller `datetimezone`\-värdet som kvartal läggs till i.
-   `numberOfQuarters`: Antalet kvartal som ska läggas till.


## Examples

### Example #1
Lägg till 1 kvartal i `date`\-, `datetime`\- eller `datetimezone`\-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
