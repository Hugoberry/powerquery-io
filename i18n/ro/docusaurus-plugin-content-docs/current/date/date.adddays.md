---
title: Date.AddDays
---

# Date.AddDays


Adaugă zilele specificat la dată.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Returnează rezultatul `date`, `datetime` sau `datetimezone` din adăugarea a `numberOfDays` zile la valoarea `datetime``dateTime`.

-   `dateTime`: Valoarea `date`, `datetime` sau `datetimezone` la care sunt adăugate zile.
-   `numberOfDays`: Numărul de zile de adăugat.


## Examples

### Example #1
Adăugaţi 5 zile la valoarea `date`, `datetime` sau `datetimezone` reprezentând data 14/05/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
