---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Retorna l&#39;inici de la setmana.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Retorna l'inici de la setmana que conté el dia <code>dateTime</code>.    <code>dateTime</code> ha de ser un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Troba l&#39;inici de la setmana per a dimarts, 11 d&#39;octubre de 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Troba l&#39;inici de la setmana per a dimarts, 11 d&#39;octubre de 2011, amb dilluns com a inici de la setmana.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
