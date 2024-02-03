---
title: Number.Sign
---

# Number.Sign


## Description

Vrne 1, če je število pozitivno, –1, če je število negativno, in 0, če je število enako nič.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

Vrne 1, če je <code>number</code> pozitivno število, –1, če je negativno število, in 0, če je enako nič.    Če ima <code>number</code> ničelno vrednost, <code>Number.Sign</code> vrne "null".


## Examples

### Example #1 
Ugotovite predznak števila 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Ugotovite predznak števila –182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Ugotovite predznak števila 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
