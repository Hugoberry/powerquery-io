---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Returnerar ett tal som anger vilket kvartal på året som datumet infaller under.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Returnerar ett tal från 1 till 4 som anger vilket kvartal på året som datumet <code>dateTime</code> infaller under. <code>dateTime</code> kan vara ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde.


## Examples

### Example #1 
Hitta det kvartal under året som datumet #date(2011, 12, 31) infaller under.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
