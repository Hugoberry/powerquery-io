---
title: Number.Sqrt
---

# Number.Sqrt


Vraća kvadratni koren broja.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Vraća kvadratni koren broja `number`. Ako je `number` bez vrednosti, `Number.Sqrt` vraća rezultat bez vrednosti. Ako je to negativna vrednost, vraća se `Number.NaN` (nije broj).


## Examples

### Example #1
Pronalaženje kvadratnog korena broja 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Pronalaženje kvadratnog korena broja 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
