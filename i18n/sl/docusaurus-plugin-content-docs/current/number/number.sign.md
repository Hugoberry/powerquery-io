---
title: Number.Sign
---

# Number.Sign


Vrne 1, če je število pozitivno, –1, če je število negativno, in 0, če je število enako nič.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Vrne 1, če je `number` pozitivno število, –1, če je negativno število, in 0, če je enako nič. Če ima `number` ničelno vrednost, `Number.Sign` vrne"null".


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
