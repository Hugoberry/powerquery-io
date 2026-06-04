---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indica se esta data cae nun ano bisesto.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime `dateTime` indicado cae nun ano bisesto.

-   `dateTime`: un valor `date`, `datetime` ou `datetimezone` que se vai avaliar.


## Examples

### Example #1
Determinar se o ano 2012, representado por `#date(2012, 01, 01)`, é un ano bisesto.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
