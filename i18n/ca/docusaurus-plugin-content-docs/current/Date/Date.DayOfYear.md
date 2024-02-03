---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Retorna un nombre de l&#39;1 al 366 que representa el dia de l&#39;any.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Retorna un nombre que representa el dia de l'any del valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>, <code>dateTime</code> proporcionat.


## Examples

### Example #1 
Dia de l&#39;any de l&#39;1 de març de 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
