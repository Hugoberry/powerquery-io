---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Returnerer et tal fra 1-366, som angiver dagen i året.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Returnerer et tal, der repræsenterer året i den angivne værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Året dags den 1. marts 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
