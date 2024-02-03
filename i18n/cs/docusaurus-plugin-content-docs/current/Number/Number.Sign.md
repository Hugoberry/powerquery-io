---
title: Number.Sign
---

# Number.Sign


## Description

Pokud je číslo kladné, vrátí hodnotu 1. Pokud je číslo záporné, vrátí hodnotu -1. Pokud je číslo rovno 0, vrátí hodnotu 0.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Pokud je hodnota <code>number</code> kladná, vrátí hodnotu 1. Pokud je hodnota záporná, vrátí hodnotu -1. Pokud je hodnota rovna 0, vrátí hodnotu 0.    Pokud je hodnota <code>number</code> null, funkce <code>Number.Sign</code> vrátí hodnotu null.


## Examples

### Example #1 
Určí znaménko čísla 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Určí znaménko čísla -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Určí znaménko čísla 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
