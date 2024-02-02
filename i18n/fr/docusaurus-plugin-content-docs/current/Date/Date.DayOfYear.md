---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Retourne un nombre compris entre 1 et 366 représentant le jour de l&#39;année.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Retourne un nombre représentant le jour de l'année dans la valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> fournie, <code>dateTime</code>.


## Examples

### Example #1 
Jour de l’année du 1er mars 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
