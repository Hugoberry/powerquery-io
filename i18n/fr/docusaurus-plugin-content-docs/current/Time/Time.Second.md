---
title: Time.Second
---

# Time.Second


## Description

Retourne le composant des secondes.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Retourne le composant des secondes de la valeur <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fournie, <code>dateTime</code>.


## Examples

### Example #1 
Rechercher la deuxième valeur d&#39;une valeur datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
