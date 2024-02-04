---
title: Number.Sign
---

# Number.Sign


## Description

Devolve 1 se o número for positivo, -1 se for negativo e 0 se for zero.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Devolve 1 se <code>number</code> for um número positivo, -1 se for um número negativo e 0 se for zero.    Se <code>number</code> for nulo, <code>Number.Sign</code> devolverá null.


## Examples

### Example #1 
Determinar o sinal de 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Determinar o sinal de -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Determinar o sinal de 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
