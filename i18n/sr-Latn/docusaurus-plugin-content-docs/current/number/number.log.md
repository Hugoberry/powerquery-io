---
title: Number.Log
---

# Number.Log


Vraća logaritam broja za navedenu osnovu (podrazumevana je e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Vraća logaritam broja, `number`, za navedenu osnovu `base`. Ako se `base` ne navede, podrazumevana vrednost je Number.E. Ako je `number` bez vrednosti, `Number.Log` vraća rezultat bez vrednosti.


## Examples

### Example #1
Izračunavanje logaritma broja 2 sa osnovom 10.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Izračunavanje logaritma broja 2 sa osnovom e.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
