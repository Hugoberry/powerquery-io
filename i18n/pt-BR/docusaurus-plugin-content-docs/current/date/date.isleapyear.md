---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indica se esta data cairá em um ano bissexto.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` especificado cairá em um ano bissexto.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determina se o ano 2012, conforme representado por `#date(2012, 01, 01)`, é um ano bissexto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
