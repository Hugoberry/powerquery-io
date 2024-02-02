---
title: Duration.Hours
---

# Duration.Hours


## Description

Retourne la partie heures d’une durée.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Retourne la partie heures de <code>duration</code>.


## Examples

### Example #1 
Extrayez les heures d’une valeur de durée.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
