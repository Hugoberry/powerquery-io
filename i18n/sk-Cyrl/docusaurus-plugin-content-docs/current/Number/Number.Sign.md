---
title: Number.Sign
---

# Number.Sign


## Description

Vráti hodnotu 1 pre kladné číslo, hodnotu –1 pre záporné číslo a hodnotu 0 pre nulu.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Vráti hodnotu 1, ak je číslo <code>number</code> kladné, hodnotu –1, ak je záporné, a hodnotu 0, ak je nula.    Ak hodnota <code>number</code> je null, funkcia <code>Number.Sign</code> vráti hodnotu null.


## Examples

### Example #1 
Určte znamienko čísla 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Určte znamienko čísla –182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Určte znamienko čísla 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
