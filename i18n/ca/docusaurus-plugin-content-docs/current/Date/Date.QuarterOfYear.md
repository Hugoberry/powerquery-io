---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Retorna un nombre que indica en quin trimestre de l&#39;any cau la data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Retorna un nombre de l'1 al 4 que indica en quin trimestre de l'any cau la data <code>dateTime</code>. <code>dateTime</code> pot ser un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Troba en quin trimestre de l&#39;any cau la data #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
