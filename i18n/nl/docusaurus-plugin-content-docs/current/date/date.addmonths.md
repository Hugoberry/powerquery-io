---
title: Date.AddMonths
---

# Date.AddMonths


Voegt de opgegeven maanden toe aan de datum.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Hiermee wordt het `date`\-, `datetime`\- of `datetimezone`\-resultaat geretourneerd van het toevoegen van `numberOfMonths` maanden aan de `datetime`\-waarde `dateTime`.

-   `dateTime`: de `date`\-, `datetime`\- of `datetimezone`\-waarde waaraan maanden worden toegevoegd.
-   `numberOfMonths`: het aantal maanden dat moet worden toegevoegd.


## Examples

### Example #1
5 maanden aan de waarde voor `date`, `datetime` of `datetimezone` toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
18 maanden aan de waarde voor `date`, `datetime` of `datetimezone` toevoegen die de datum 14/5/2011 en de tijd 08:15:22 AM vertegenwoordigt.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
