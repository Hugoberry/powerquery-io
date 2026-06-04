---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indica se esta data ocorre durante o ano actual e está antes do día actual ou no día actual, como o determina a data e a hora actual do sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de data e hora `dateTime` indicado ocorre durante o ano actual e está antes do día actual ou no día actual, como o determina a data e a hora actual do sistema.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.


## Examples

### Example #1
Determinar se a hora actual do sistema está até a data.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
