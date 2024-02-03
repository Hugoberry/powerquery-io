---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Vraća kvadratni koren broja.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Vraća kvadratni koren broja <code>number</code>.    Ako je <code>number</code> bez vrednosti, <code>Number.Sqrt</code> vraća rezultat bez vrednosti. Ako je to negativna vrednost, vraća se <code>Number.NaN</code> (nije broj).


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
