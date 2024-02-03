---
title: Duration.Days
---

# Duration.Days


## Description

Devuelve la parte de días de una duración.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Devuelve la parte de días de <code>duration</code>.


## Examples

### Example #1 
Extrae el número de días entre dos fechas.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
