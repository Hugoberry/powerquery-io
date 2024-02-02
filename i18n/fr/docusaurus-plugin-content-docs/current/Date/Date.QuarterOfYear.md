---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Retourne un nombre indiquant dans quel trimestre de l&#39;année la date se situe.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Retourne un nombre de 1 à 4 indiquant dans quel trimestre de l'année la date <code>dateTime</code> se situe. <code>dateTime</code> peut être une valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.


## Examples

### Example #1 
Recherche dans quel trimestre la date #date(2011, 12, 31) se situe.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
