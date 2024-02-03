---
title: Number.Sign
---

# Number.Sign


## Description

Vraća 1 ako je broj pozitivan, -1 ako je negativan i 0 ako je broj nula.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Vraća 1 ako je <code>number</code> pozitivan broj, -1 ako je negativan i 0 ako je broj nula.    Ako je <code>number</code> bez vrednosti, <code>Number.Sign</code> vraća rezultat bez vrednosti.


## Examples

### Example #1 
Utvrđivanje znaka za 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Utvrđivanje znaka za -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Utvrđivanje znaka za 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
