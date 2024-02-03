---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Devolve un número de 1 a 366 que representa o día do ano.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Devolve un número que representa o día do ano no valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Día do ano do 1 de marzo de 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
