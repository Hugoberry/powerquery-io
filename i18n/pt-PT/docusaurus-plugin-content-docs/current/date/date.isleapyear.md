---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indica se esta data recai num ano bissexto.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime especificado `dateTime` recai num ano bissexto.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determinar se o ano 2012, conforme representado por `#date(2012, 01, 01)`, é um ano bissexto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
