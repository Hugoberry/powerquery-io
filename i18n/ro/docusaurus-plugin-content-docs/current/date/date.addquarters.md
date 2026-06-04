---
title: Date.AddQuarters
---

# Date.AddQuarters


Adaugă trimestrele specificate la dată.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Returnează rezultatul `date`, `datetime` sau `datetimezone` din adăugarea a `numberOfQuarters` trimestre la valoarea `datetime``dateTime`.

-   `dateTime`: Valoarea `date`, `datetime` sau `datetimezone` la care sunt adăugate trimestre.
-   `numberOfQuarters`: Numărul de trimestre de adăugat.


## Examples

### Example #1
Adăugaţi 1 trimestru la valoarea `date`, `datetime` sau `datetimezone` reprezentând data 14/05/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
