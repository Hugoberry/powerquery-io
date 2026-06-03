---
title: Date.AddYears
---

# Date.AddYears


Lägger till angivna år i datumet.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Returnerar `date`\-, `datetime`\- eller `datetimezone`\-resultatet när `numberOfYears` läggs till i ett `datetime`\-värde `dateTime`.

-   `dateTime`: `date`\-, `datetime`\- eller `datetimezone`\-värdet som år läggs till i.
-   `numberOfYears`: Antalet år som ska läggas till.


## Examples

### Example #1
Lägg till 4 år i `date`\-, `datetime`\- eller `datetimezone`\-värdet som representerar den 14 maj 2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Lägg till 10 år i `date`\-, `datetime`\- eller `datetimezone`\-värdet som representerar datumet och tiden motsvarande den 14 maj 2011 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
