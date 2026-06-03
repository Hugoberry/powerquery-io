---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Retorna uma número indicando em qual trimestre do ano a data cairá.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Retorna uma número de 1 a 4 indicando em qual trimestre do ano a data `dateTime` cairá. `dateTime` pode ser um valor `date`, `datetime` ou `datetimezone`.


## Examples

### Example #1
Localize em qual trimestre do ano a data #date(2011, 12, 31) cairá.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
