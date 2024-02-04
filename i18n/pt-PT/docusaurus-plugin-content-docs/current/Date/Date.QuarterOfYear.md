---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Devolve um número que indica o trimestre do ano em que a data recai.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Devolve um número de 1 a 4 que indica o trimestre do ano em que a data <code>dateTime</code> recai. <code>dateTime</code> pode ser um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Encontrar o trimestre do ano em que a data #date(2011, 12, 31) recai.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
