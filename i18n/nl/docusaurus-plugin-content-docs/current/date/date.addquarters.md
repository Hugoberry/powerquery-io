---
title: Date.AddQuarters
---

# Date.AddQuarters


Voegt de opgegeven kwartalen toe aan de datum.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Retourneert het resultaat van `date`, `datetime` of `datetimezone` dat volgt uit het toevoegen van `numberOfQuarters` kwartalen aan de `datetime`waarde `dateTime`.

-   `dateTime`: de waarde voor `date`, `datetime` of `datetimezone` waaraan kwartalen worden toegevoegd.
-   `numberOfQuarters`: het aantal kwartalen dat u wilt toevoegen.


## Examples

### Example #1
1 kwartaal aan de waarde voor `date`, `datetime` of `datetimezone` toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
