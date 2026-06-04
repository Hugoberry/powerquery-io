---
title: Date.DayOfYear
---

# Date.DayOfYear


Retorna un nombre de l'1 al 366 que representa el dia de l'any.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Retorna un nombre que representa el dia de l'any del valor `date`, `datetime` o `datetimezone`, `dateTime` proporcionat.


## Examples

### Example #1
Dia de l'any de l'1 de març de 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
