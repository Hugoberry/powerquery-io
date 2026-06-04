---
title: Date.AddWeeks
---

# Date.AddWeeks


Adaugă săptămânile specificate la dată.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Returnează rezultatul `date`, `datetime` sau `datetimezone` din adăugarea a `numberOfWeeks` săptămâni la valoarea `datetime``dateTime`.

-   `dateTime`: Valoarea `date`, `datetime` sau `datetimezone` la care sunt adăugate săptămâni.
-   `numberOfWeeks`: Numărul de săptămâni de adăugat.


## Examples

### Example #1
Adăugaţi 2 săptămâni la valoarea `date`, `datetime` sau `datetimezone` reprezentând data 14/05/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
