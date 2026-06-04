---
title: Date.AddYears
---

# Date.AddYears


Adaugă anii specificaţi la dată.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Returnează rezultatul `date`, `datetime` sau `datetimezone` din adăugarea a `numberOfYears` la o valoare `datetime``dateTime`.

-   `dateTime`: valoarea `date`, `datetime` sau `datetimezone` la care sunt adăugați anii.
-   `numberOfYears`: numărul de ani de adăugat.


## Examples

### Example #1
Adăugaţi 4 ani la valoarea `date`, `datetime` sau `datetimezone` reprezentând data 14/05/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Adăugaţi 10 ani la valoarea `date`, `datetime` sau `datetimezone` reprezentând data şi ora 14/05/2011 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
