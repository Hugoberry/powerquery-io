---
title: Number.Log
---

# Number.Log


## Description

Vrátí logaritmus čísla o zadaném základu (výchozí hodnotu e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Vrátí logaritmus čísla <code>number</code> o zadaném základu <code>base</code>. Pokud není zadána hodnota <code>base</code>, použije se výchozí hodnota Number.E.    Pokud je hodnota <code>number</code> null, funkce <code>Number.Log</code> vrátí hodnotu null.


## Examples

### Example #1 
Vrátí dekadický logaritmus (se základem 10) čísla 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Vrátí logaritmus se základem e čísla 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
