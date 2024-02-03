---
title: Number.Sign
---

# Number.Sign


## Description

Devolve 1 se o número é positivo, -1 se é negativo e 0 se é cero.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Devolve 1 se <code>number</code> é un número positivo, -1 se é un número negativo e 0 se é cero.    Se <code>number</code> é nulo, <code>Number.Sign</code> devolve nulo.


## Examples

### Example #1 
Determinar o signo de 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Determinar o signo de -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Determinar o signo de 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
