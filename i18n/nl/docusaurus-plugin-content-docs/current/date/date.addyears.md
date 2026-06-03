---
title: Date.AddYears
---

# Date.AddYears


Voegt de opgegeven jaren toe aan de datum.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Hiermee wordt het `date`\-, `datetime`\- of `datetimezone`\-resultaat geretourneerd van het toevoegen van `numberOfYears` aan een `datetime`\-waarde `dateTime`.

-   `dateTime`: de `date`\-, `datetime`\- of `datetimezone`\-waarde waaraan jaren worden toegevoegd.
-   `numberOfYears`: het aantal jaren dat moet worden toegevoegd.


## Examples

### Example #1
4 jaren aan de waarde voor `date`, `datetime` of `datetimezone` toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
10 jaren aan de waarde voor `date`, `datetime` of `datetimezone` toevoegen die de datum 14/5/2011 en de tijd 08:15:22 AM vertegenwoordigt.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
