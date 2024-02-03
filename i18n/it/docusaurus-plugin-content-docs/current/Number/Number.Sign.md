---
title: Number.Sign
---

# Number.Sign


## Description

Restituisce 1 se il numero è positivo, -1 se è negativo e 0 se è zero.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Restituisce 1 se <code>number</code> è un numero è positivo, -1 se è un numero negativo e 0 se è zero.    Se <code>number</code> è Null, <code>Number.Sign</code> restituisce Null.


## Examples

### Example #1 
Determinare il segno di 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Determinare il segno di -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Determinare il segno di 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
