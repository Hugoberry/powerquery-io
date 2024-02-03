---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Retorna uma número indicando em qual trimestre do ano a data cairá.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Retorna uma número de 1 a 4 indicando em qual trimestre do ano a data <code>dateTime</code> cairá. <code>dateTime</code> pode ser um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


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
